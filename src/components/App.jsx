import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { fetchImage } from './api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchImageData();
    }
  }

  fetchImageData = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });

      const initialFetch = await fetchImage(query, page);

      this.setState(prevState => ({
        images:
          page === 1
            ? initialFetch.fetchs
            : [...prevState.images, ...initialFetch.fetchs],
        isLoading: false,
        allPage: initialFetch.fetchsTotal,
      }));
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  };

  handleSubmit = newValue => {
    console.log(newValue);
    return this.setState({
      query: newValue.query,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />

        {images.length > 0 && <ImageGallery items={images} />}
        <Button onClick={this.handleLoadMore} />
        {isLoading && <Loader />}
        <Toaster />
      </div>
    );
  }
}
