import React, { PureComponent } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

class ProjectGallery extends PureComponent {

  render() {
    const images = [
      // 'beerfellows 2.png',
      // 'garagefellows-laptop.png',
      // 'varcity.png',
      'beerfellows.png',
      // 'garagefellows.png',
      'chat-bot-laptop copy.png',
      'varcity-laptop-2.png'
    ];

    return (
      <section className="section">
        <div className="container">
          <ImageGallery items={images.map(img => (
            {
              original: `/images/mac-frames/${img}`,
              thumbnail: `/images/mac-frames/${img}`,
              description: 'ewfoi jwefdoijwefosiwef joiwefj'
            }))}
            infinite={true}
            lazyLoad={true}
            showFullscreenButton={false}
            showPlayButton={false}
            useBrowserFullscreen={false}
          />
        </div>
      </section>
    )
  }
}

export default ProjectGallery;