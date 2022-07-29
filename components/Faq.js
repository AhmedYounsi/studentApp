import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaQuestionCircle } from 'react-icons/fa'
function Faq() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <span>Foire aux questions</span>
                    <h2>Foire aux questions</h2>
                </div>
                <br />

                <div className="row justify-content-center" data-aos="fade-down">
                    <div className="col-lg-10">
                        <div className="accordion accordion-flush" id="faqlist">
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                        <FaQuestionCircle />
                                        Qui peut m’aider dans mon projet ?
                                    </button>
                                </h3>
                                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                        <FaQuestionCircle />
                                        Comment je peux protéger mon idée ?
                                    </button>
                                </h3>
                                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                        <FaQuestionCircle />
                                        Est-ce que je peux être salarié et entrepreneur ?
                                    </button>
                                </h3>
                                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                        <FaQuestionCircle />
                                        Comment je trouve des professionnels ?
                                    </button>
                                </h3>
                                <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        <FaQuestionCircle />
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Faq