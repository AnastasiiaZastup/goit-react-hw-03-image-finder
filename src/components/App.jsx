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
    allPage: null,
    error: false,
    allPages: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoading: true });
        const initialFetch = await fetchImage(query, page);

        this.setState(prevState => {
          const { fetchs, fetchsTotal } = initialFetch;

          return {
            images: [...prevState.images, ...fetchs],
            isLoading: false,
            allPage: fetchsTotal,
          };
        });
      } catch (error) {
        this.setState({
          error,
          isLoading: false,
        });
      }
    }
  }

  handleSubmit = newValue => {
    return this.setState({
      query: newValue.query,
      page: 1,
      images: [],
      allPages: null,
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
