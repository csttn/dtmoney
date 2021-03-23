import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F2F5;
    --blue: #5429CC;
    --blue-light:#6933ff;
    --green:#33CC95;
    --red: #E62E4D;
    --shape: #FFFFFF;
    --text-title: #363f5f;
    --text-body: #969cB3;
}

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html {
    @media (max-width: 1080px){
    font-size:93.75%; //15px
}
    @media (max-width: 720px){
        font-size: 87.5%; //14px
    }
 }

 body {
     background: #F0F2F5;
     -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
     font-family: "Popins", sans-serif;
     font-weight: 400;
 }

 h1,h2,h3,h4,h5,h6, strong {
     font-weight:600;
 }

 button{
     cursor: pointer;
 }

 [disabled] {
     opacity:0.6;
     cursor: not-allowed;
 }


.react-modal-overlay{
background: rgba(0,0,0,0.5);
position: fixed;

top:0;
bottom: 0;
right:0;
left:0;

display:flex;
align-items: center;
justify-content: center;


}


.ReactModal__Overlay {
  opacity: 0;
  transform: translateY(500px);
  transition: all 500ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
  transform: translateY(0px);
}

.ReactModal__Overlay--before-close {
  opacity: 0;
  transform: translateY(500px);
}

.react-modal-content{

    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius:0.25rem;

}

.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.5);
    }
}
`;
