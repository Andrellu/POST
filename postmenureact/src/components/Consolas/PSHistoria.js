import React, { Component } from 'react';
import "./imagenes.css";
import { NavLink } from "react-router-dom";

export default class PSHistoria extends Component {
    
    state = {
        consolas : [
            {
                nombre : "PlayStation",
                fecha : "29/9/1995",
                precio : 360,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/250px-PSX-Console-wController.png"
            },
            {
                nombre : "PocketStation",
                fecha : "23/1/1999",
                precio : 23,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sony-PocketStation.png/250px-Sony-PocketStation.png"
            },
            {
                nombre : "PlayStation 2",
                fecha : "24/11/2000",
                precio : 450,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PS2-Versions.png/250px-PS2-Versions.png"
            },
            {
                nombre : "PSX",
                fecha : "23/3/2003",
                precio : 360,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Console_psx.jpg/300px-Console_psx.jpg"
            },
            {
                nombre : "PlayStation Portable(PSP)",
                fecha : "3/8/2005",
                precio : 249,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Sony-PSP-1000-Body.png/250px-Sony-PSP-1000-Body.png"
            },
            {
                nombre : "PlayStation 3",
                fecha : "23/3/2007",
                precio : 299,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/PS3Versions.png/200px-PS3Versions.png"
            },
            {
                nombre : "PSP 3000",
                fecha : "15/10/2008",
                precio : 170,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/PSP-3000-Model.png/250px-PSP-3000-Model.png"
            },
            {
                nombre : "PlayStation Portable Go",
                fecha : "1/10/2009",
                precio : 250,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PSPGo_-_Piano_Black.png/250px-PSPGo_-_Piano_Black.png"
            },
            {
                nombre : "PlayStation Vita",
                fecha : "22/2/2012",
                precio : 250,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/PlayStation_Vita_illustration.svg/310px-PlayStation_Vita_illustration.svg.png"
            },
            {
                nombre : "PlayStation 4",
                fecha : "29/11/2013",
                precio : 400,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/PS4-Console-wDS4.jpg/250px-PS4-Console-wDS4.jpg"
            },
            {
                nombre : "PlayStation 5",
                fecha : "19/11/2020",
                precio : 500,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/250px-PlayStation_5_and_DualSense_with_transparent_background.png"
            }
        ]
    }
    
    render() {
        return (
            <div>
                <h1>Hisoria PlayStation</h1><br/>
                <div className="row justify-content-center">
                <div className="col-8 text-center">
                        <p>
                            PlayStation (??????????????????????????? Pureisut??shon?, com??nmente abreviado como PS) es el nombre de una serie de consolas de videojuegos creadas y desarrolladas por Sony Interactive Entertainment. Han estado presentes en la quinta, sexta, s??ptima, octava y novena generaci??n de videoconsolas, la compa????a promotora est?? actualmente en el mercado con su PlayStation 5.

                            La marca se introdujo por primera vez el 3 de diciembre de 1994 en Jap??n1??? y ha desarrollado y publicado cinco videoconsolas de sobremesa, que incluyen un centro de medios de comunicaci??n y un servicio en l??nea, posteriormente se introdujeron revistas y computadoras.

                            La primera consola de la serie, fue PlayStation, que tambi??n fue la primera en vender 100 millones de unidades.2??? Su sucesora, PlayStation 2, es la segunda consola de la serie, y la m??s vendida de la historia hasta la fecha, alcanzando m??s de 155 millones de unidades vendidas, llegando a estar en el mercado por 13 a??os.2??? PlayStation 3, ha vendido m??s de 87 millones de consolas en todo el mundo,3??? despu??s le sigue PlayStation 4 lanzada en 2013 & 2014 con 118 millones de unidades vendidas como la tercera consola en superar dicho formato Y la m??s reciente consola de Sony, PlayStation 5, lanzada en noviembre de 2020, ha llegado a las 10,1 millones de unidades.4???

                            La primera consola port??til de la marca fue PocketStation, que se lanz?? en Jap??n en 1999, aunque se pretend??a lanzar en el resto del mundo, pero debido a sus bajas ventas la consola solo lleg?? a Jap??n, y fue descontinuada en 2002 por Sony. Aunque la consola logr?? llegar a algunas partes fuera de Jap??n, como Sudam??rica y algunos lugares de Europa. Su segunda videoconsola port??til fue PlayStation Portable (PSP) que hasta 2014 logr?? vender 80 millones de unidades, haciendo que Sony volviera al mercado port??til luego de que no les fue muy bien con PocketStation.5??? Su sucesor fue llamado PlayStation Vita siendo la tercera y ??ltima port??til de Sony, que vendi?? 16 millones de unidades a 2018, pero la consola fue descontinuada en 2019 a nivel mundial debido a sus bajas ventas.6???

                            Otro hardware lanzado como parte de la serie de PlayStation incluye la PSX, un grabador de v??deo digital que se integr?? en la PlayStation y PlayStation 2, aunque dur?? poco debido a su alto precio y nunca fue lanzado fuera de Jap??n, as?? como una Sony Bravia televisi??n que cuenta con un sistema integrado de PlayStation 2. La serie principal de los controladores utilizados por las series PlayStation es el DualShock, una l??nea de joysticks de vibraci??n-feedback con gamepad que llegaron a los 28 millones de unidades vendidas al 28 de junio de 2008.

                            En agosto de 2018, Sony anunci?? que sus consolas hab??an superado las 500 millones de unidades vendidas.7??? Motivada por este hecho, la compa????a present?? una edici??n limitada de la consola PlayStation 4 Pro llamada "PlayStation 4 Pro 500 Million Limited Edition".8???

                            El 19 de septiembre de 2018, Sony Interactive Entertainment anunci?? el lanzamiento de la consola PlayStation Classic, una versi??n en miniatura de la primera PlayStation que incluye 20 juegos precargados.9??? Es un 45 % m??s peque??a que la consola original e incluye dos mandos de juego y una ranura para conexiones HDMI. Se pondr?? a la venta en cantidades limitadas en Norteam??rica, Europa y Jap??n el 3 de diciembre de 2018.10???

                            El 8 de octubre de 2019, v??a Twitter, Sony hizo oficial el anuncio de la nueva consola PlayStation 5. Esta llegar??a al mercado a partir del 3 de diciembre de 2020.
                            <br/><a href="https://es.wikipedia.org/wiki/PlayStation">Mas Informaci??n</a>                        
                        </p><br/>
                    </div>
                    </div>
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <table className="table table-striped">
                            <thead>
                                <th>Consola</th>
                                <th>Precio</th>
                                <th>Fecha</th>
                                <th>Imagen</th>
                            </thead>
                            <tbody>
                                {this.state.consolas.map((consola, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{consola.nombre}</td>
                                            <td>{consola.precio}???</td>
                                            <td>{consola.fecha}</td>
                                            <td><img alt="Imagen" src={consola.imagen} className="imgConsola"/></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
