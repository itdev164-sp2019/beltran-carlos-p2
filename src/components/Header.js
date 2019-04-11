import React, { Component } from 'react'
import unsplash from '../data/unsplash'
import styled, {keyframes, css} from 'styled-components'
import headerImg from '../assets/images/zachary-nelson.jpg'
import downArrow from '../assets/images/downArrow.png'
import SearchBar from '../components/SearchBar'
import ImageList from './ImageList';



const HeaderImg = styled.div`
    
    background: url(${headerImg}) no-repeat center center fixed;
    background-size:cover;
    color: white
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
`
const HeaderHolder = styled.div`
    display: table;
    width: 100%;
    height: 100%;
`

const HeaderInner = styled.div`
    display:table-cell;
    vertical-align: middle;
    text-align: center;
    
    h1{
        font-size: 50px;
    }
    p{
        text-transform: capitalize;
        font-size:25px;
        }
`
const Styles = {
    width: '50px',
    height: '50px',  
}
const animation = keyframes`
        0%   { transform: translateY(25px); }
        50%  { transform: translateY(0px); }
        100% { transform: translateY(25px); }
`

const animationRule = css`
  ${animation} 1s infinite alternate;
`

const ComponentAnimate = styled.div`
  animation: ${animationRule};
  
  
`

class Header extends Component {

    state = { images: [], animate: false };

//FETCH DATA FROM UNSPLASH API USING AXIOS 

 onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
    params: { query: term }
    //USE .THEN WHEN WORKING WITH A PROMISE OR Use Async Await
    });
    /*.then((response) => {
        console.log(response.data.results);
    });*/
    this.setState({images: response.data.results});
    this.setState({animate: true});
}

renderAnimate(){
    if(this.state.animate === true){
        return(
        <ComponentAnimate><img  src={downArrow} style={Styles} alt="Down Arrow"  /></ComponentAnimate>
        )
    }
}
  render() {
    return (
        <HeaderImg>
            <HeaderHolder>
                <HeaderInner>
                    <h1>Splash Search</h1>
                    <p>In order to find, you must first search</p>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    {this.renderAnimate()}
                </HeaderInner>
            </HeaderHolder>
            <ImageList images = {this.state.images} />
        </HeaderImg>
        
    )
  }
}


export default Header