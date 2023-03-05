import React, {Component} from 'react';
import './BackToTop.css';
import ArrowUpLineIcon from '@rsuite/icons/ArrowUpLine';

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
    };
  }

  handleScroll = () => {
    this.setState({scrollPosition: window.scrollY});
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {scrollPosition} = this.state;

    return (
      <>
        {scrollPosition > 100 && (
          <button className='btn-btt' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><ArrowUpLineIcon/></button>
        )}
      </>
    );
  }
}

export default BackToTop;
