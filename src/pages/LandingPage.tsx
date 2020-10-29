import React from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiSquare, BiCircle } from "react-icons/all";
import { Map, TileLayer, Marker } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/pages/Landing.scss";

import landing_img from "../assets/landing.svg";
import marker from "../assets/marker.svg";
import loupe from "../assets/loupe.svg";

const tileUrl = `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`;

const mapIcon = Leaflet.icon({
  iconUrl: marker,
  iconSize: [25, 30],
  iconAnchor: [12.5, 30],
});

export default function Landing() {
  return (
    <div id='landing-page'>
      <header>
        <BiMenu />
        <img src={loupe} alt='loupe' />
        <Link to='/login'>LOGIN</Link>
      </header>

      <img src={landing_img} alt='landing' className='landing-image' />

      <main>
        <div className='about'>
          <h1>SOBRE O PROJETO</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            doloribus accusamus iste hic provident consequuntur a distinctio
            libero alias nemo, illum recusandae velit obcaecati voluptatibus
            temporibus excepturi sit asperiores sint?
          </p>
        </div>

        <div className='tour'>
          <h1>TOUR HISTÓRICO</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            doloribus accusamus iste hic provident consequuntur a distinctio
            libero alias nemo, illum recusandae velit obcaecati voluptatibus
            temporibus excepturi sit asperiores sint?
          </p>

          <Map
            center={{ lat: -23.5104642, lng: -46.5021313 }}
            zoom={15}
            style={{ width: "100%", height: "250px" }}
          >
            <TileLayer url={tileUrl} />

            <Marker
              icon={mapIcon}
              position={{ lat: -23.5104642, lng: -46.5021313 }}
            />
          </Map>

          <div className='discover'>
            <span>
              Descubra os locais de resistência da cidade de São Paulo, faça o
              Tour Histórico
            </span>

            <ul className='tour-route'>
              <div className='detail-left'>
                <BiCircle />
                <div className='line' />
                <BiSquare />
              </div>

              <div className='list-wrapper'>
                <li>
                  <div className='waypoint'>PONTO INICIAL</div>
                </li>

                <li>
                  <div className='waypoint'>PONTO FINAL</div>
                </li>
              </div>
            </ul>

            <button>INICIAR</button>
          </div>
        </div>

        <div className='contribute'>
          <h1>CONTRIBUA COM O PROJETO</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            dolor perferendis explicabo, similique maxime nihil! Nam molestias
            error ipsam nisi repellendus eos nulla! Dolorem facere corrupti
            temporibus debitis culpa hic!
          </p>

          <button>CONTRIBUIR</button>
        </div>

        <div className='newsletter'>
          <h1>NEWSLETTER</h1>

          <form>
            <input
              type='email'
              required
              placeholder='INSIRA SEU E-MAIL'
              name='email'
            />

            <button type='submit'>OK</button>
          </form>
        </div>
      </main>
    </div>
  );
}
