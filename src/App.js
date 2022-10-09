import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
 const [open, setOpen] =  React.useState(false);
 const [top, setTop] = React.useState(0);
 const [left, setLeft] = React.useState(0);

 const changeBottom = () => {
  setTop(top - 20);
 }
 
 const changeRight = () => {
  setLeft(left -20);
 }

 const changeLeft = () => {
  setLeft(left + 20);
 }

 const changeTop = () => {
  setTop(top + 20);
 }


 const modalTittle = 'Мотозапчасти';
  return (
    <div className="App">
      <header className="App-header"> 
        <div className="container bg-light">
          <div className="App-intro">
            <Button onClick={ ()=> setOpen(true) } className="btn-danger mb-3">Каталог товаров</Button>
            <div className={`header-intro ${open ? 'show' : ''}`}>
              {open &&(
                <div className="overlay">
                  <div style={{ top: top, left: left, }} className="Vmodal">
                    <div className="Vmodal-header">
                      <h1>{modalTittle}</h1>
                      <img className="modalCloseImage" onClick={ ()=> setOpen(false)} alt="lan" src="https://img.icons8.com/color/48/000000/close-window.png"/>
                    </div>
                    <div className="modal-content">
                      <img src="https://cdn.powergo.ca/media/catalog/2022/27/0ebc062a16ee408c8dfcefd840de2f77_site/cfmoto-125-st-papio-lemon-green-2022-0.jpg" alt="" className="content-background"/>
                      <p className="content-subtittle">Купить запчасти на скутер, мопед или мотоцикл</p>
                      <div className="btn-groop_control">
                        <Button onClick={changeBottom} className="btn-top mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                          <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                        </Button>
                        <div className="btn-wrapp">
                          <Button onClick={changeRight} className="btn-left mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                            </svg>
                          </Button>
                          <Button onClick={changeLeft} className="btn-right mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                          </svg>
                         </Button>
                        </div>
                        <Button onClick={changeTop} className="btn-bottom mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div> 
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
