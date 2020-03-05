import React, {useState} from 'react';
import Background from './images/header.jpg';
import Select from 'react-select';
import Alert from "../Alert";


let sectionStyle = {
    backgroundImage: `url(${Background})`
};
let red = {
    background: 'red'
};
let yellow = {
    background: 'yellow'
};
function SearchArea() {

    const services = [
        { value: '1', label: 'Boya - Badana - Alçı' },
        { value: '2', label: 'Su Tesisatı' },
        { value: '3', label: 'Doğalgaz Tesisatı' },
        { value: '4', label: 'Isıtma Soğutma Tesisatı' },
        { value: '5', label: 'Elektrik ve Aydınlatma' },
        { value: '6', label: 'TV Tamiri ve Uydu' },
        { value: '7', label: 'Mutfak ve Banyo Tadilatı' },
        { value: '8', label: 'Cam' },
        { value: '9', label: 'İzolasyon - Mantolama' },
        { value: '10', label: 'Mobilya Montaj ve Tamir' },
        { value: '11', label: 'Kapı - Pencere - Duşakabin' },
        { value: '12', label: 'Ahşap ve Fayans Zemin Kaplama' },
        { value: '13', label: 'Çatı - Teras' },
        { value: '14', label: 'Bahçe - Peyzaj' },
        { value: '15', label: 'Demir Doğrama' },
        { value: '16', label: 'Marangoz' },
        { value: '17', label: 'Mermer' },
    ];

    const locations = [
        { value: '1', label: 'Abbasağa' },
        { value: '2', label: 'Akat' },
        { value: '3', label: 'Arnavutköy' },
        { value: '4', label: 'Balmumcu' },
        { value: '5', label: 'Bebek' },
        { value: '6', label: 'Cihannuma' },
        { value: '7', label: 'Dikilitaş' },
        { value: '8', label: 'Etiler' },
        { value: '9', label: 'Gayrettepe' },
        { value: '10', label: 'Konaklar' },
        { value: '11', label: 'Kuruçesme' },
        { value: '12', label: 'Kültür' },
        { value: '13', label: 'Levazım' },
        { value: '14', label: 'Levent' },
        { value: '15', label: 'Mecidiye' },
        { value: '16', label: 'Muradiye' },
        { value: '17', label: 'Nisbetiye' },
        { value: '18', label: 'Ortaköy' },
        { value: '19', label: 'Sinanpaşa' },
        { value: '20', label: 'Türkali' },
        { value: '21', label: 'Ulus' },
        { value: '22', label: 'Vişnezade' },
        { value: '23', label: 'Yıldız' },
        { value: '24', label: 'Acıbadem' },
        { value: '25', label: 'Bostancı' },
        { value: '26', label: 'Caddebostan' },
        { value: '27', label: 'Caferağa' },
        { value: '28', label: 'Dumlupınar' },
        { value: '29', label: 'Eğitim' },
        { value: '30', label: 'Erenköy' },
        { value: '31', label: 'Fenerbahçe' },
        { value: '32', label: 'Feneryolu' },
        { value: '33', label: 'Fikirtepe' },
        { value: '34', label: 'Göztepe' },
        { value: '35', label: 'Hasanpaşa' },
        { value: '36', label: 'Koşuyolu' },
        { value: '37', label: 'Kozyatağı' },
        { value: '38', label: 'Merdivenköy' },
        { value: '39', label: 'Osmanağa' },
        { value: '40', label: 'Rasimpaşa' },
        { value: '41', label: 'SahrayıCedit' },
        { value: '42', label: 'Suadiye' },
        { value: '43', label: 'Zühtüpaşa' },
        { value: '44', label: '19 Mayıs' }
    ];


    const dates = [
        { value: '1', label: '09.00 - 12.00 arası' },
        { value: '2', label: '12.00 - 15.00 arası' },
        { value: '3', label: '15.00 - 18.00 arası' }
    ];

    const colourStyles = {
        control: base => ({
            ...base,
            padding: 0,
            border: '0 !important',
            // This line disable the blue border
            boxShadow: '0 !important',
            '&:hover': {
                border: '0 !important'
            }
        })
    };

    function handleSearchClick() {

    }

    return (
        <section>
            <div className="block no-padding">
                <div className="layer blackish">
                    <div data-velocity="-.1"
                         style={ sectionStyle }
                         className="no-parallax parallax scrolly-invisible" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="listingsf">
                                    <h3>AdreseUsta</h3>
                                    <h3>Aradığın usta en fazla 3 saatte telefonunda!</h3>
                                    <div className="listingform">
                                        <form>
                                            <div style={{ width: "27%", float:"left" }}>
                                                <Select options={services}
                                                        isClearable
                                                        placeholder={ 'Hizmet Türü' }
                                                        styles={colourStyles}
                                                        components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                                                />
                                            </div>

                                            <div style={{ width: "27%", float:"left"}}>
                                                <Select options={locations}
                                                        isClearable
                                                        placeholder={ 'Konum' }
                                                        styles={colourStyles}
                                                        components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                                                />
                                            </div>

                                            <div style={{ width: "26%", float:"left" }}>
                                                <Select options={dates}
                                                        isClearable
                                                        placeholder={ 'Tarih' }
                                                        styles={colourStyles}
                                                        components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                                                />
                                            </div>
                                            <div style={{ width: "20%", float:"left" }} className="fieldbtn">
                                                <button type="button" onClick={handleSearchClick}>Ara <i className="flaticon-magnifying-glass"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchArea;