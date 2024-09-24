"use client"

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './ContactForm.css';
import useAnimateTitles from '@/components/useAnimateTitles';

const ContactForm = () => {
    const [selectedBudget, setSelectedBudget] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [startAnimation, setStartAnimation] = useState(false);
    const [fadeInForm, setFadeInForm] = useState(false);
    const [fadeInLogo, setFadeInLogo] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
        const logoTimer = setTimeout(() => {
            setFadeInLogo(true);
        }, 1200); // Delay of 0.5 second for the logo

        const formTimer = setTimeout(() => {
            setFadeInForm(true);
        }, 1200); // Delay of 1 second for the form

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(formTimer);
        };
    }, []);

    useAnimateTitles(startAnimation);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "b9a15f30-728f-4ba8-aa3e-1070f3a207f5");
        formData.append("budget", selectedBudget);
        formData.append("subjects", selectedSubjects.join(", ")); // Join the selected subjects into a string

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: 'Da var den sendt!',
                text: 'Vi kontakter deg så snart som mulig',
                icon: 'success'
            });
        }
    };

    const handleSubjectClick = (subject) => {
        // Toggle subject selection
        if (selectedSubjects.includes(subject)) {
            setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
        } else {
            setSelectedSubjects([...selectedSubjects, subject]);
        }
    };

    const handleBudgetClick = (budget) => {
        setSelectedBudget(budget);
    };

    return (
        <div className='contact-container-wrapper'>
            <div className='contact-container'>
                <div className='contact-form-title'>
                
                    <h2 className="anim-title animate-on-load">
                        <span className="line"><span className="line-inner">Klar for å bygge noe magisk?</span></span>
                    </h2>
                    <p className="anim-paragraph animate-on-load">
                        <span className="line-p"><span className="line-inner-p">Fortell oss om prosjektet ditt så kontakter vi deg så snart som mulig</span></span>
                    </p>
                </div>
                <div className={`contact-form-container ${fadeInForm ? 'fade-in-right' : ''}`}>
                    <form className='contact-form' onSubmit={onSubmit}>
                        <div className="subject-buttons-container">
                            <label>Hva trenger du?</label>
                            <div className="subject-buttons">
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Nettside') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Nettside')}
                                >
                                    Nettside
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Front-end utvikling') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Front-end utvikling')}
                                >
                                    Front-end utvikling
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Back-end utvikling') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Back-end utvikling')}
                                >
                                    Back-end utvikling
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Analysering') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Analysering')}
                                >
                                    Analysering
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Produkt utvikling') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Produkt utvikling')}
                                >
                                    Produkt utvikling
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Rådgivning') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Rådgivning')}
                                >
                                    Rådgivning
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Digitalisering') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Digitalisering')}
                                >
                                    Digitalisering
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Design') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Design')}
                                >
                                    Design
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Prosjektledelse') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Prosjektledelse')}
                                >
                                    Prosjektledelse
                                </button>
                                <button
                                    type="button"
                                    className={`subject-button ${selectedSubjects.includes('Brukerstøtte') ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick('Brukerstøtte')}
                                >
                                    Brukerstøtte
                                </button>
                            </div>
                        </div>

                        <div className='input-box'>
                            <label>Navnet ditt</label>
                            <input type='text' className='field' placeholder='Ola Nordmann' name='name' required />
                        </div>
                        <div className='input-box'>
                            <label>Eposten din</label>
                            <input type='email' className='field' placeholder='ola@nordmann.no' name='email' required />
                        </div>
                        <div className='input-box'>
                            <label>Melding</label>
                            <textarea name='message' className='field mess' placeholder='Fortell oss om prosjektet ditt.' required />
                        </div>

                        <div className='input-box budget-box'>
                            <label>Hva er ditt budsjett?</label>
                            <div className='budget-buttons'>
                                <button
                                    type="button"
                                    className={`budget-button ${selectedBudget === '10K' ? 'active' : ''}`}
                                    onClick={() => handleBudgetClick('10K')}
                                >
                                    10K
                                </button>
                                <button
                                    type="button"
                                    className={`budget-button ${selectedBudget === '20K' ? 'active' : ''}`}
                                    onClick={() => handleBudgetClick('20K')}
                                >
                                    20K
                                </button>
                                <button
                                    type="button"
                                    className={`budget-button ${selectedBudget === '50K' ? 'active' : ''}`}
                                    onClick={() => handleBudgetClick('50K')}
                                >
                                    50K
                                </button>
                                <button
                                    type="button"
                                    className={`budget-button ${selectedBudget === '100K+' ? 'active' : ''}`}
                                    onClick={() => handleBudgetClick('100K+')}
                                >
                                    100K+
                                </button>
                            </div>
                        </div>

                        <button type='submit' className='form-button'>Send melding -&gt;</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default ContactForm;
