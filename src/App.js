import React, { Component } from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';

import './App.css';

const ImageTransformations = ({width, selectedShirt}) => {
    return (
        <Image publicId={selectedShirt.main+'.jpg'}>
            <Transformation width={width} crop="scale" />
        </Image>
    );
};

class App extends Component {

    constructor(props) {
        super(props);
        const defaultShirt = {id: 1, main: 'shirt_only'};
        this.state = {
            shirts: [
                defaultShirt,
                {id: 2, main: 'laying-shirt'},
                {id: 3, main: 'hanging_t-shirt'}
            ],
            selectedShirt: defaultShirt,
            // background: {rgb:{r:255,g:255,b:255}}
        };
    }

    selectShirt(thumb) {
        this.setState({selectedShirt: thumb}, _ => this.forceUpdate())
    }

    render() {
        // const rgb = this.state.background.rgb;

        return (
          <div className="App">
              <CloudinaryContext cloudName="christekh">
                  <div id="imageDemoContainer">
                      <div id="mainImage">
                          <ImageTransformations
                              width="600"
                              // rgb={rgb}
                              selectedShirt={this.state.selectedShirt}
                              text={this.state.text} />
                      </div>
                      <div id="imageThumbs">
                          <ul id="thumbs">
                              {this.state.shirts.map(thumb => {
                                 return (
                                 <li className={thumb.main === this.state.selectedShirt.main ? 'active': ''} onClick={this.selectShirt.bind(this, thumb)} key={thumb.id}>
                                     {/*<Image publicId={thumb.main}>*/}
                                         {/*<Transformation width="75" crop="scale" />*/}
                                     {/*</Image>*/}
                                     <ImageTransformations
                                         width="75"
                                        //  rgb={rgb}
                                         selectedShirt={thumb}
                                         text={' '} />
                                 </li>
                                 )
                              })}
                          </ul>
                      </div>
                  </div>
              </CloudinaryContext>
          </div>
        );
    }
}

export default App;
