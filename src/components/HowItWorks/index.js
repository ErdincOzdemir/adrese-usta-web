import React from "react";

function HowItWorks() {

    return (
        <section>
            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <h2>AdreseUsta nasıl çalışır?</h2>
                                <span>AdreseUsta'nın usta portföyü, gönül rahatlığıyla evinin kapısını açabileceğin işinin ehli ve güvenli ustalardan oluşturuldu. İşte bu ustalardan talebine en uygun 4 tanesi, sadece 3 saat içinde seni telefonla arayarak bilgi alacak ve fiyat verecek. Konum, hizmet türü ve hizmeti almak istediğin zamana karar ver, talebini oluştur, seni arayan ustaları karşılaştır, istediğini seç ve devam et. Bu kadar basit!</span>
                            </div>
                            <div className="howworksec">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="howwork">
                                            <i className="flaticon-check"></i>
                                            <h3>Hizmet türünü seç</h3>
                                            <p>İhtiyacın olan hizmeti listeden seç.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="howwork">
                                            <i className="flaticon-map"></i>
                                            <h3>Konumunu seç</h3>
                                            <p>Seçtiğin hizmeti almak istediğin konumu seç.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="howwork">
                                            <i className="flaticon-planet-earth"></i>
                                            <h3>Tarih ve saat seç</h3>
                                            <p>Ne zaman istersen ustan o zaman gelsin.</p>
                                        </div>
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

export default HowItWorks;