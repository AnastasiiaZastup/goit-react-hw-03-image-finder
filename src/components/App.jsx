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
  };

  async componentDidUpdate(prevProps, prevState) {
    
    const { query, page } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
    try {
      this.setState({ 
        isLoading: true, 
        error: null 
      });
  
      const initialFetch = await fetchImage(query, page);
  
      this.setState(prevState => ({
        images: [...prevState.images, ...initialFetch.hits],
        allPage: initialFetch.totalHits,
      }));
    } catch (error) {

      this.setState({
        error: "Oops.",
      });

    } finally {

      this.setState({ isLoading: false });
    }
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
    const galleryImage = images.length !== 0;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />

        {galleryImage && <ImageGallery images={images} />}
        <Button onClick={this.handleLoadMore} />
        {isLoading && <Loader />}
        <Toaster />
      </div>
    );
  }
}
