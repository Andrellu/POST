import React, { Component } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import "./imagenes.css";
import xbox from "./../../assets/images/Consolas/Xbox_consola.png";
import xbox360 from "./../../assets/images/Consolas/Consola_Xbox360.jpg";
import xboxOne from "./../../assets/images/Consolas/Consola_XboxOne.jpg";
import xboxSeries from "./../../assets/images/Consolas/Consola_XboxSeries.jpg";
import ps1 from "./../../assets/images/Consolas/Consola_PlayStation.jpg";
import ps2 from "./../../assets/images/Consolas/Consola_PlayStation2.jpg";
import ps3 from "./../../assets/images/Consolas/Consola_PlayStation3.jpg";
import ps4 from "./../../assets/images/Consolas/Consola_PlayStation4.jpg";
import ps5 from "./../../assets/images/Consolas/Consola_PlayStation5.jpg";
import psp from "./../../assets/images/Consolas/Consola_PSP3000.jpg";
import pspVita from "./../../assets/images/Consolas/Consola_PlayStationVita.jpg";
import gameBoy from "./../../assets/images/Consolas/Consola_GameBoy.jpg";
import NDS from "./../../assets/images/Consolas/Consola_NDS.jpg";
import NDS3D from "./../../assets/images/Consolas/Consola_NDS3d.jpg";
import NDS2D from "./../../assets/images/Consolas/Consola_NDS2d.jpg";
import NSOled from "./../../assets/images/Consolas/Consola_NintendoSwitch.jpg";

export default class DetalleXbox extends Component {

    state = {
        validar: false
    }

    volverConRedirect(){
        this.setState({
            validar: true
        })
    }

    render() {
        return (
            <div>
                {this.state.validar===true&&(
                    <Redirect to={"/home"}/>
                )}

                <h1>{this.props.nomConsola}</h1>

                {this.props.nomConsola === "Xbox"? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="xbox" src={xbox}/><br/>
                                <h2>Precio Salida : 500???</h2>
                                <h2>N??mero de ventas : 100 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        La Xbox posee una gran cantidad de accesorios, como son tarjetas de memorias, cables audio y v??deo.


                                        Control de Xbox versi??n 2004.

                                        Comparaci??n de los controles de la sexta generaci??n
                                        Adaptador RF Xbox: Es un adaptador que permite conectar la Xbox a televisores que carezcan de conexi??n de audio y v??deo.
                                        Cable est??ndar de conexi??n audio/video Xbox: Es un cable que permite conectar la consola a un televisor con terminal de entrada de audio y v??deo compuesto.
                                        Memoria Xbox: Es una unidad de memoria port??til cuya capacidad es de 8, 16 y 32 MB, sirve para almacenar partidas y poder transportar los archivos hacia otras consolas Xbox. Esta unidad es para uso exclusivo con controladores compatibles con Xbox que tengan ranuras de expansi??n de memoria.
                                        Auriculares: es un aparato que sirve para comunicarse mediante partidas multijugador en "XBOX LIVE"
                                        Control DVD: mediante un accesorio conectado a las entradas principales de controles comunes, el mismo recibe se??ales del control en su lector infrarrojo, esto permite disfrutar las pel??culas tal como se har??a con un DVD com??n. Es obligatorio el conectar este dispositivo para la reproducci??n de un DVD.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver Con Redirect</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close NavLink</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox 360"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="xbox360" src={xbox360}/><br/>
                                <h2>Precio Salida : 400</h2>
                                <h2>N??mero de ventas : 85 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        La XBox 360 es la primera de las tres consolas de nueva generaci??n en aparecer. Las otras dos, Playstation 3 y Nintendo Revolution lo har??n (esperemos) durante el a??o que viene. Microsoft ha sabido anteponerse a sus competidores y ofrecer su consola justo a tiempo para el periodo navide??o, lo cual le puede reportar importantes beneficios en forma de implantaci??n masiva en el mercado.

                                        Pero, ??est?? la XBox 360 a la altura de los tiempos en lo que respecta a sus especificaciones t??cnicas? Vamos a darles un repaso para ver cuales son sus caracter??sticas, pero podemos adelantar que XBox 360 se pone por delante de todas las otras consolas que hay ahora mismo en el mercado. La XBox 360 est?? gobernada por una CPU basada en PowerPC y dise??ada por IBM. Esta CPU funciona a a 3.2 GHz y consta de tres n??cleos sim??tricos que pueden ejecutar dos hilos por hardware cada uno. Incorpora 512 MB de RAM de tipo GDDR3 a 700 Mhz, que le proporcionan un ancho de banda a memoria de 22.4 Gbps.

                                        La tarjeta gr??fica que incorpora es un desarrollo de ATI, basado en la familia ATI Radeon R500, y funciona a 500 MHz. Es capaz de mover 500 millones de tri??ngulos por segundo y tiene una resoluci??n de salida de 720p o 1080i, con formato panor??mico 16:9. La XBox 360 est?? especialmente pensada para ser usada con televisores HDTV de alta resoluci??n y, al parecer, Microsoft ha llegado a un acuerdo con muchas tiendas para que muestren sus consolas con este tipo de teles.

                                        El audio tiene una frecuencia m??xima de 48 KHz con una resoluci??n de hasta 32 bits, pudiendo decodificar hasta 256 canales al mismo tiempo. Todos los juegos soportan Dolby Digital 5.1, lo que garantiza un sonido espectacular, especialmente si utilizamos un sistema de HomeTheater.

                                        Los juegos de XBox 360 vendr??n en discos DVD de doble capa, con una capacidad de hasta 8.5 GB. El lector que incorpora es de 12X y soporta los siguientes formatos: DVD-ROM, DVD-R/RW, DVD+R/RW, CD, CD-R y CD-RW. La consola tambi??n puede usar un disco duro interno de 20 GB, el cual ser?? imprescindible si queremos usar la emulaci??n de juegos de la XBox. Adem??s, tambi??n incorpora dos ranuras para tarjetas de memoria de 64 MB, donde se podr??n guardar las partidas, puntuaciones,...

                                        La conectividad est?? asegurada a trav??s de una tarjeta Ethernet Gigabit. Tambi??n podemos usar una red inal??mbrica, si disponemos de ella, mediante los accesorios que Microsoft pondr?? a la venta.

                                        Soporta hasta cuatro inal??mbricos, adem??s de tres controladores adicionales a trav??s de USB. Estos controladores ser??n compatibles con PCs con Windows XP. El controlador inal??mbrico tiene una autonom??a de hasta 25 horas mediante el pack de bater??as recargables NiMh.

                                        Las posibilidades de expansi??n de la consola vienen dadas por la incorporaci??n de tres puertos USB 2.0, a trav??s de los cuales podremos conectar discos duros externos y otros reproductores y consolas, como el iPod o la PSP, desde los cuales podremos reproducir contenido multimedia.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox One"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="xboxone" src={xboxOne}/><br/>
                                <h2>Precio Salida : 500</h2>
                                <h2>N??mero de ventas : 48 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        La consola est?? formada por un procesador AMD de 8 n??cleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 m??s 32 MB de ESRAM, con una velocidad de hasta 204 GB/s22??? 500 GB de disco duro y un lector Blu-ray 6x.6??? Los gr??ficos integrados tambi??n corren por parte de AMD siendo 8 veces m??s potentes que los de Xbox 360 y compuestos por 5 000 000 000 de transistores, diez veces m??s que Xbox 360. Incluye adem??s conexiones USB 3.0, HDMI in-out y 802.11n Wireless. Tambi??n el Kinect 2.0,23??? con una c??mara de 1080p que procesa 2 GB de datos por segundo con un tiempo de respuesta de 13 milmillon??simas de segundo.6??? El sistema operativo est?? formado por un Kernel de Windows que tiene varias funciones multimedia y de Internet Explorer, otro dedicado en exclusiva a la consola y un tercero que gestiona ambos aspectos de forma simult??nea. Cuenta con una unidad ??ptica Blu-ray Disc e incluye el sistema cloud de almacenamiento en l??nea.

                                        Se confirm?? que gracias a la nube, tendr??a soporte para contenido en resoluciones de 4K (Ultra HD) para contenidos de v??deo, im??genes y para juegos.24??? Xbox One tambi??n puede recibir se??ales televisivas v??a cable coaxial de sistema de TV de pago por cable o satelital, desplazando los descodificadores de las empresas de televisi??n de pago. Sin embargo, es desconocido si Xbox puede funcionar con ciertos descodificadores que adem??s requieren una Smart Card. Tambi??n puede hacer de intermediario entre se??ales televisivas v??a cable HDMI de los descodificadores de TV de pago, solo si estos incorporan HDMI; sin embargo Xbox o Kinect por s?? mismos no pueden cambiar de canal por el mando u orden de voz, ya que no controlan el descodificador, solo reciben su imagen.

                                        El puerto HDMI puede recibir una segunda se??al de v??deo de otros dispositivos, como un PC, reproductor Blu-Ray o incluso de otras consolas.25???

                                        Xbox One carece de un conector RCA y esto lo hace incompatible con los antiguos televisores de rayos cat??dicos (aunque se pueden conseguir adaptadores especiales de HDMI a Conector RCA relativamente econ??micos para poder usar la consola con este tipo de aparatos.)
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox Series X|S"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="xboxseries" src={xboxSeries}/><br/>
                                <h2>Precio Salida : 500???/300???</h2>
                                <h2>N??mero de ventas : 8 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        El SoC de la Xbox 360 es un chip creado a medida por AMD para Microsoft, el cual ha sido creado a medida y por tanto es exclusivo de la consola de Microsoft. Se trata de un procesador monol??tico de 360 mm2 de tama??o, el cual incluye los siguientes componentes en su interior:
                                        CPU basada en la arquitectura AMD Zen 2.
                                        GPU a medida basada en la arquitectura RDNA 2 de AMD
                                        Aceleradores especializados en ciertas tareas concretas del hardware
                                        Vamos a ir desgranando punto por punto las diferentes partes del SoC de la Xbox Series X en todo este art??culo. ya que es la unidad principal que engloba todo el hardware excepto la memoria RAM del sistema y el almacenamiento SSD del mismo.
                                        Al contrario que su homologa en PlayStation 5, de igual arquitectura, puede funcionar de dos modos distintos:

                                        En el primer modo, funciona con el SMT activo y por tanto puede ejecutar 2 hilos de ejecuci??n por n??cleo. En dicho modo funciona a 3.6 GHz, por lo que es 0.1 GHz m??s r??pida que su hom??loga en PlayStation 5.
                                        En el segundo modo, el SMT queda inactivo, pero a cambio cada n??cleo funciona a 3.8 GHz. Este modo esta pensado especialmente para los juegos de Xbox One (X) que se ejecutaban en 8 n??cleos AMD Jaguar sin soporte multhilo.
                                        El hecho de utilizar la arquitectura Zen 2 supone un salto importante, la nueva CPU no solo duplica en velocidad de reloj a los modelos est??ndar de Xbox One, sino que adem??s llega a tener m??s del doble de potencia por ciclo de reloj, suponiendo uno de los saltos m??s grandes entre generaciones de consolas.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 1"? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="ps1" src={ps1}/><br/>
                                <h2>Precio Salida : 360???</h2>
                                <h2>N??mero de ventas : 100 millones</h2>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2>
                                    <p>
                                        La primera consola de la serie, fue PlayStation, que tambi??n fue la primera en vender 100 millones de unidades.2??? Su sucesora, PlayStation 2, es la segunda consola de la serie, y la m??s vendida de la historia hasta la fecha, alcanzando m??s de 155 millones de unidades vendidas, llegando a estar en el mercado por 13 a??os.2??? PlayStation 3, ha vendido m??s de 87 millones de consolas en todo el mundo,3??? despu??s le sigue PlayStation 4 lanzada en 2013 & 2014 con 118 millones de unidades vendidas como la tercera consola en superar dicho formato Y la m??s reciente consola de Sony, PlayStation 5, lanzada en noviembre de 2020, ha llegado a las 10,1 millones de unidades.4???
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 2"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="ps2" src={ps2}/><br/>
                                <h2>Precio Salida : 420???</h2>
                                <h2>N??mero de ventas : 155 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        CPU: Emotion Engine (EE) RISC MIPS-IV (R5900) de 64 bits con capacidades SIMD de 128 bits10???
                                        Frecuencia de reloj del Sistema: 294.912 MHz (299 MHz a partir de la Versi??n V9).
                                        Acumulador Multiplicador de Coma Flotante (FMAC) x 1
                                        Divisor de Coma Flotante (FDIV) x 1
                                        8 KB Cach?? (4 KB Instrucciones + 4 KB Datos)
                                        Co-Procesador 2: VU0
                                        Acumulador Multiplicador de Coma Flotante (FMAC) x 4
                                        Divisor de Coma Flotant (FDIV) x 1
                                        8 KB Cach?? (4 KB Instrucciones + 4 KB Datos)
                                        Unidad de Procesado Vectorial: VU1
                                        Acumulador Multiplicador de Coma Flotante (FMAC) x 5
                                        Divisor de Coma Flotante (FDIV) x 2
                                        24 KB Cach?? (16 KB Instrucciones + 8 KB Datos)
                                        16 KB Scratch Pad RAM
                                        Ancho de banda del Bus de memoria: 128 bits DMA con 10 canales
                                        Memoria
                                        32 megabytes RAMBUS DRAM
                                        Ancho de 32 bits (16 bits en Dual Channel)
                                        400 MHz (800 MHz efectivos)
                                        800 megabits por segundo por pin
                                        Ancho de Banda de 3.2 gigabytes por segundo
                                        Prestaciones
                                        Rendimiento en coma flotante: 6.5  GFLOPS
                                        Transformaci??n Geom??trica 3D: 6 600 000 pol??gonos/s
                                        Decodificador de compresi??n de imagen: MPEG2
                                        Procesamiento de superficies (Bezier): 16 000 000 de pol??gonos/s
                                        Procesamiento de im??genes: 150 000 000 de p??xeles/s
                                        Transformaci??n de perspectivas: 66 000 000 de pol??gonos/s
                                        Iluminaci??n: 38 000 000 de pol??gonos/s
                                        Part??culas: 36 000 000 de pol??gonos/s
                                        512 Pixel Pipelines
                                        32.5 gigapixeles por segundo (sin texturas)
                                        500 gigatexeles por segundo
                                        Filtro por Punto, Bilinear, Trilinear, Anisotr??pico y Mip-Map
                                        Correcci??n de Perspectiva de Mapeado de Texturas
                                        Bump Mapping
                                        Environment Mapping
                                        512-bit Color (RGBA)
                                        512-bit Z Buffer
                                        4 MB VRAM
                                        eDRAM de ancho de banda de 38.4 gigabytes por segundo (19.2 GB/s en cada direcci??n)
                                        eDRAM de ancho de banda de Texturas de 9.6 gigabytes por segundo
                                        150 000 000 de part??culas por segundo
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 3"?(
                    <div>
                        <di className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="ps3" src={ps3}/><br/>
                                <h2>Precio Salida : 500???</h2>
                                <h2>N??mero de ventas : 102 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2>
                                    <p>
                                        En la PlayStation 3 lleg?? una importante revoluci??n en el aspecto de controladores para consolas de Sony. El mando a??adi?? la funci??n de detecci??n del movimiento y vibraci??n. A este primer mando se le llam?? Sixaxis, nombre que significa ??seis ejes?? haciendo referencia a los seis (six) ejes (axis) de detecci??n de movimiento (3 para movimientos posicionales en el espacio mediante aceler??metros y 3 para la detecci??n de rotaci??n). M??s tarde, debido a las cr??ticas de los usuarios hacia la falta de vibraci??n, se hizo una revisi??n del mando con el nombre DualShock 3, que a??ade la funci??n de vibraci??n de nuevo al mando:
                                        Tiene funci??n inal??mbrica a trav??s de Bluetooth, con bater??a de litio de aproximadamente 30 horas de autonom??a, carg??ndose a trav??s de un cable USB-miniUSB. Adem??s se puede conectar a la consola a trav??s del mismo cable, sin necesidad de usar la funci??n inal??mbrica.
                                        Los botones R2 y L2 son ahora gatillos anal??gicos.
                                        Al igual que en la PSP, se ha a??adido el Bot??n Home (Bot??n PS) en el centro del mando, similar al bot??n Xbox Guide del mando de la Xbox 360.
                                        Tiene cuatro ledes en la parte delantera, que permiten saber en qu?? puerto est?? conectado.
                                        Se ha mejorado su sensibilidad con respecto a su predecesor.
                                        Se introdujeron seis grados de libertad.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </di>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 4"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="ps4" src={ps4}/><br/>
                                <h2>Precio Salida : 400???</h2>
                                <h2>N??mero de ventas : 116 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Nombre del producto

                                        PlayStation??4

                                        C??digo del producto

                                        Serie CUH-2000

                                        Procesador principal

                                        Procesador personalizado de un chip

                                        CPU: AMD 'Jaguar' x86-64, 8 n??cleos

                                        GPU: motor gr??fico AMD de 1,84 TFLOPS basado en Radeon???

                                        Memoria

                                        8 GB GDDR5

                                        Capacidad de almacenamiento*

                                        500 GB, 1 TB

                                        Dimensiones externas

                                        Aprox. 265??39??288 mm (anchura ?? altura ?? longitud, 
                                        sin incluir las piezas que sobresalen)

                                        Peso

                                        Aprox. 2,1 kg

                                        Unidad BD/DVD
                                        (solo lectura)

                                        BD de 6 CAV
                                        DVD de 8 CAV

                                        Entrada/Salida

                                        2 puertos de alt??sima velocidad USB (USB 3.1 Gen1) 
                                        1 puerto AUX

                                        Red

                                        1 puerto Ethernet (10BASE-T, 100BASE-TX, 1000BASE-T)

                                        IEEE 802.11 a/b/g/n/ac

                                        Bluetooth?? 4.0

                                        Alimentaci??n

                                        AC de 100-240 V, 50/60 Hz

                                        Consumo de energ??a

                                        M??x. 165W

                                        Temperatura de funcionamiento

                                        5 ??C - 35 ??C

                                        Salida AV

                                        Salida HDMI??? (compatible con salida HDR)
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 5" ?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="psp" src={ps5}/><br/>
                                <h2>Precio Salida : 500???</h2>
                                <h2>N??mero de ventas : 13 millones</h2> <br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2>
                                    <p>
                                        CPU x86-64-AMD Ryzen ???Zen 2??? con 8 n??celos y 16 subprocesos, y una frecuencia variable de hasta 3,5 GHz.
                                        GPU con 10,3 TFLOPS de potencia, con 36 CUs a una frecuencia variable de hasta 2,23 GHz, basada en AMD Radeon RDNA 2.
                                        16 GB de memoria GDDR6.
                                        Tendr?? disco duro SSD, que ya de por s?? es una tecnolog??a que marcar?? una gran diferencia para reducir al m??ximo los tiempos de carga de los juegos. Pero adem??s, el disco duro SSD de PlayStation 5 ser?? m??s del doble de r??pido que el de Xbox Series X, y su ancho de banda de lectura alcanzar?? los 5,5 GB por segundo para datos en bruto, y entre 8 y 9 GB por segundo para datos comprimidos. Esta velocidad ultraalta supondr?? muchas ventajas, como la eliminaci??n de tiempos de carga al arrancar el juego, cambiar de nivel o utilizar la opci??n de ???viaje r??pido??? en juegos de mundo abierto. Adem??s, gracias a esto los desarrolladores tambi??n podr??n crear mundos m??s grandes y con m??s detalles.
                                        El mencionado disco duro SSD tendr?? una capacidad de almacenamiento de 825 GB. En este sentido s?? estar?? por debajo de Xbox Series X (que tendr?? 1 TB), pero ser?? posible aumentar la memoria adquiriendo un disco duro adicional: para instalar juegos de PS5 ser?? necesario conectar un disco duro SSD espec??fico (Sony anunciar?? pr??ximamente los que ser??n compatibles), mientras que para juegos retrocompatibles nos servir?? un disco duro normal.
                                        Su GPU permitir?? trazado de rayos, la nueva tecnolog??a que hace posible representar gr??ficos mucho m??s realistas gracias a las mejoras en sombras, reflejos y efectos de iluminaci??n.
                                        Audio 3D envolvente con tecnolog??a Tempest 3D AudioTech, dise??ado para ofrecer una mayor inmersi??n y que identifiquemos desde qu?? direcci??n viene cada sonido.
                                        Los juegos de PlayStation 5 ser??n capaces de alcanzar la resoluci??n 8K y la fluidez de 120 fotogramas por segundo, aunque se espera que el est??ndar normal sea verlos correr de manera fija a 4K y 60 fps.
                                        Su lector de Ultra HD Blu-ray ser?? capaz de leer discos de hasta 100 GB, lo cual ser?? ??til tanto para recibir juegos de gran tama??o como para reproducir pel??culas en este formato. El juego en la nube, que es una gran apuesta de Sony, tambi??n tendr?? alg??n tipo de presencia, pero el formato f??sico seguir?? siendo primordial.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PSP 3000"? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="vita" src={psp}/><br/>
                                <h2>Precio Salida : 170???</h2>
                                <h2>N??mero de ventas : 76 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Tama??o de pantalla: 4.3 pulgadas, proporci??n 16:9.
                                        Resoluci??n de pantalla : 480 x 272, 16 millones de colores.
                                        CPU: MIPS R4000; 333 MHz
                                        Tama??o: 169 x 71 x 19 mm (6,7 x 2,9 x 0,9 pulgadas).
                                        Micr??fonos incorporados
                                        El s??mbolo del bot??n HOME ha sido reemplazado por el s??mbolo PS.
                                        Los botones inferiores cambian de forma.
                                        Un anillo m??s fino.
                                        La pantalla ofrece algo m??s de contraste.
                                        La bater??a durar?? lo mismo que la PSP Slim & Lite, aunque en un principio se dijo que durar??a menos
                                        Memoria: Memory Stick (hasta 32GB).
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PSP Vita"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="psVita" src={pspVita}/><br/>
                                <h2>Precio Salida : 250???</h2>
                                <h2>N??mero de ventas : 26 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        PlayStation Vita Model PCH-1000
                                        CPU ARM Cortex-A9 core (4 core)
                                        GPU SGX543MP4+
                                        Dimensiones Approx. 182.0 x 18.6 x 83.5mm
                                        Pantalla t??ctil 5 pulgadas(16:9), 960 x 544, Approx. 16 million colors, OLED Multi touch screen
                                        512MB VRAM 128MB
                                        Pantalla t??ctil trasera
                                        Cameras trasera y delantera
                                        Frame rate 120fps@320x240(QVGA), 60fps@640x480(VGA) 
                                        Resoluci??n 640x480(VGA)
                                        Sonido estereo
                                        Micr??fono integrado
                                        Sensores Six-axis (giroscopio, accelerometro)
                                        GPS (solo en modelo con 3G/Wi-Fi)
                                        Wi-Fi location service support
                                        Botones: PS, Encendido Directionales (Up/Down/Right/Left) Acci??n (Tri??ngulo, Cuadrado, C??rculo, Equis) Botones inferiores (Derecha/Izquierda) Stick Izquierdo y Derecho, START , SELECT, Volumen (+/-)
                                        Wireless (3G/Wi-Fi )
                                        IEEE 802.11b/g/n (n = 1x1)(Wi-Fi) (Infrastructure mode/Ad-hoc mode)
                                        Bluetooth 2.1+EDR (A2DP/AVRCP/HSP)
                                        PlayStation Vita card slot
                                        Memory card
                                        SIM card slot (3G/Wi-Fi model)
                                        Puerto multiuso (for USB data communication, DC IN, Audio (Stereo Out / Mono In), Serial data communication)
                                        Headset jack (Stereo mini jack) (Audio (Stereo Out / Mono In))
                                        Puerto para accesorios
                                        Bater??a de Litio
                                        AC adaptor AV 
                                        Formatos: MP3 MPEG-1/2 Audio Layer 3, MP4 (MPEG-4 AAC), WAVE (Linear PCM), MPEG-4 Simple Profile (AAC), H.264/MPEG-4 AVC High/Main/Baseline Profile (AAC), JPEG (Exif 2.2.1), TIFF, BMP, GIF, PNG
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Game Advance"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="gameBoy" src={gameBoy}/><br/>
                                <h2>Precio Salida : 132???</h2>
                                <h2>N??mero de ventas : 81 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Procesador principal (CPU):
                                        CPU de 32-bits con memoria integrada.
                                        Dimensiones:
                                        82 x 144,5 x 24,5mm.
                                        Peso:Aprox. 140g.Corriente:2 pilas AA.
                                        Duraci??n en juego:
                                        Aprox. 15 horas.
                                        Tipo de pantalla:
                                        Pantalla TFT de alta resoluci??n (TFT = Thin Film Transistor).
                                        Dimensiones de la pantalla:40,8mm x 61,2mm.
                                        Colores posibles:
                                        32.768 colores posibles.
                                        511 colores simult??neamente en modo de caracteres.
                                        32.768 colores simult??neamente en modo mapa de bits.
                                        Resoluci??n de la pantalla:
                                        240 x 160 p??xels.
                                        Cartuchos:
                                        Intercambiables.
                                        Control del volumen:
                                        S??.
                                        Conexi??n de auriculares:
                                        S??.
                                        Colores:
                                        Azul claro, Rojo claro, Morado, Blanco.
                                        Conexi??n de cable de dos direcciones:
                                        S??.
                                        Caracter??sticas clave:
                                        Indicador LED de carga de bater??a (con los colores verde y rojo alternando).
                                        Recepci??n de sonido PCM (sonido de auriculares est??reo).
                                        Compatible pr??cticamente con todos los juegos de Game Boy, Game Boy Pocket y Game Boy Color.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo DS" ? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="nds" src={NDS}/><br/>
                                <h2>Precio Salida : 150???</h2>
                                <h2>N??mero de ventas : 154 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        El controlador de v??deo realizaba las siguientes operaciones 3D por hardware: transform and lighting, transformaci??n textura-coordenada 3D, s??ntesis de textura, alpha blending, antialiasing, Cel shading, y z-buffering. Sin embargo usa filtrado de textura (nearest neighbor) haciendo que algunos t??tulos se vean pixelados. El sistema te??ricamente puede generar alrededor de 120.000 tri??ngulos por segundo a 60 cuadros por segundo. A diferencia de la mayor??a del hardware 3D, tiene un l??mite de unos en el n??mero de tri??ngulos que puede dibujar en una sola escena (unos 6144 v??rtices, o sea 2048 tri??ngulos). El hardware 3D est?? dise??ado para dibujar una sola pantalla por vez, o sea que para cuando se dibujan im??genes 3D diferentes en ambas pantallas la velocidad disminuye notablemente. La DS est?? generalmente m??s limitada por la cantidad de pol??gonos que por la velocidad de refresco. Posee una memoria de texturas de 132 KB por pantalla y un tama??o m??ximo de textura de 1024x1024 p??xeles. La consola Nintendo DS cuenta 4 MB de RAM. Adem??s de que cuenta con un procesador de doble n??cleo, 67 MHz (el n??cleo principal) y 33 MHz (el n??cleo secundario).

                                        El sistema tenia dos procesadores 2D por pantalla, similar al de Game Boy Advance, que tiene solo uno. Sin embargo, los n??cleos est??n divididos en principal y secundario y solo el principal puede capturar v??rtices del motor 3D. La memoria de v??deo es de 656 KB.3???

                                        Nintendo DS tenia compatibilidad con Wi-Fi IEEE 802.11b. La unidad tambi??n soporta un protocolo especial inal??mbrico creado por Nintendo que usa cifrado RSA en la se??alizaci??n el cual era usado tanto para PictoChat, un chat para consolas DS, como para el sistema de descargas de DS, el cual permit??a compartir un cartucho entre dos consolas distintas. El Wi-Fi se usa para acceder a la conexi??n Wi-Fi de Nintendo donde los usuarios pueden usar Internet o varios usuarios pueden jugar al mismo juego.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo 3DS" ? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="3d" src={NDS3D}/><br/>
                                <h2>Precio Salida : 200???</h2>
                                <h2>N??mero de ventas : 77 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2>
                                    <p>
                                        Tama??o: 134??74??21mm
                                        Peso: 230 gramos
                                        Pantalla superior: 3,53 pulgadas, panor??mica con visi??n 3D sin gafas, 800??240 p??xeles de resoluci??n.
                                        Pantalla inferior: 3,02 pulgadas, 320??240 p??xeles de resoluci??n
                                        Una interior y dos exteriores para recrear el efecto 3D, cada una de ellas con una resoluci??n de 0,3 megap??xeles (640??480)
                                        2,4GHz. Intercambio de datos con otras 3DS a trav??s del Modo Tag. Conexi??n a internet en puntos de acceso LAN.
                                        Botones A/B/Y/X, D-pad, L/R, Start/Select, Pad deslizante (360??), pantalla t??ctil, micr??fono interno, c??mara, sensor de movimiento, giroscopio, volumen 3D (ajusta el grado del efecto 3D), bot??n de Home, bot??n de conexi??n inal??mbrica, bot??n de energia.
                                        Ranura para tarjetas de juego, ranura para tarjetas SD, conexi??n de corriente, conexi??n de carga, conexi??n de auriculares.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo 2DS" ? (
                    <div>
                        <img className="consola" alt="2d" src={NDS2D}/><br/>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <h2>Precio Salida : 100???</h2>
                                <h2>N??mero de ventas : 77 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Las medidas de la propia consola son ligeramente superiores a las de la 3DS: 127 x 144 x 20,3 mm y tiene un peso de 260 g (la Nintendo 3DS pesa 235 g, por ejemplo, mientras que la 3DS XL se va hasta los 336 g). La Nintendo 2DS incluye un stick anal??gico y una cruceta a la izquierda, los botones X, A, B, Y, Start y Select a la derecha, dos botones superiores, bot??n de encendido, bot??n Home, un micr??fono, un altavoz, salida de auriculares est??reo, ranura para tarjetas SD, y un nuevo bot??n deslizante llamado Sleep que deja la consola en reposo y que equivale a cerrarla en la 3DS.

                                        En su interior, adem??s, incorpora sensores de aceleraci??n y de giro y cuenta con conectividad WiFi que permite acceder a la Nintendo eShop y hacer uso tanto de StreetPass como de SpotPass. La bater??a, por su parte, se carga en aproximadamente 3,5 horas y ofrece una autonom??a de entre 3,5 horas y 5,5 horas para los juegos de 3DS y de 5 a 9 horas para los juegos de Nintendo DS. En modo Sleep es capaz de aguantar 3 d??as de forma aproximada.

                                        A pesar de no ser capaz de mostrar im??genes en 3D, la Nintendo 2DS lleva una c??mara frontal y dos traseras que s?? permiten capturar im??genes y v??deos en tres dimensiones que pueden ser almacenadas en la tarjeta de memoria para posteriormente transferirlas a alg??n otro dispositivo que s?? sea capaz de mostrar 3D estereosc??pico.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : (
                    <div>
                        <img className="consola" alt="nsoled" src={NSOled}/><br/><br/>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <h2>Precio Salida : 350???</h2>
                                <h2>N??mero de ventas : 55 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripci??n de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Tama??o: 102mm x 239mm x 13,9 mm con los Joy-Con acoplados.
                                        Peso: 297 g (398 g con los Joy-Con).
                                        Pantalla: LCD 6,2 pulgadas/1280x720 de resoluci??n/t??ctil.
                                        CPU/GPU: Procesador Tegra NVIDIA.
                                        Memoria: 32GB.
                                        Prestaciones de comunicaci??n: LAN inal??mbrico (tambi??n por cable en modo TV)/Bluetooth 4.1.
                                        Salida de v??deo: 1920x1080, 60fps (EN modo TV a trav??s de cable HDMI).
                                        Salida de audio: Compatible con PCM lineal 5.1 (en modo TV a trav??s de cable HDMI).
                                        Altavoces: Est??reo.
                                        Terminal USB: Type-C (para cargar o conectar a la base).
                                        Conector de micr??fono y auriculares: Salida est??reo.
                                        Ranura de tarjetas de juego: S??lo compatible con tarjetas de Switch.
                                        Ranura de tarjetas microSD: Compatible con microSD, microSDHC y microSDXC (con actualizaci??n).
                                        Sensores: Aceler??metro, giroscopio y sensor de brillo.
                                        Condiciones ambientales: Temperatura 5-35??C/Humedad 20-80%.
                                        Bater??a interna: Bater??a de ion de litio con capacidad 4310 mAH no extra??ble.
                                        Duraci??n de la bater??a: Entre 3 y 6 horas dependiendo del uso de Nintendo Switch.
                                        Tiempo de carga: 3 horas aproximadamente en modo espera.
                                    </p>
                                </div>
                                <button onClick={()=>{this.volverConRedirect()}}>Volver</button>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                )}
            </div>
        )
    }
}
