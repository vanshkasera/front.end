import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { templateImagesPaths } from '../Data/Data'; // templateImagesPaths is imported from Data.js which is used to display static images of various templates on the Home page.
import { useDispatch } from 'react-redux';
import { updateState } from '../../ReduxManager/dataStoreSlice';
const shortid = require('shortid');

// This Home component renders various resume templates on the screen, allowing users to select one and proceed further.
function Home() {
    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver'); // State to display 'Use Template' button when user hovers over the template.
    const dispatch = useDispatch();

    const styles = {
        container: {
            color: '#1f4287',
            height: '80vh', // Set a fixed height for the container
            overflowY: 'scroll', // Make the container scrollable if content exceeds the height
        },
        templateWrapper: {
            position: 'relative',
        },
        templateButton: {
            position: 'absolute',
            top: '50%',
            right: '30%',
            transform: 'translateY(-50%)', // Center the button vertically
        },
    };

    return (
        <div style={{ minWidth: '300px' }}>
            <div className='d-flex justify-content-center mt-5'>
                <h3 className='p-2 rounded' style={{ backgroundColor: 'aliceblue' }}>
                    Select a Template to get started!
                </h3>
            </div>

            <div className='container' style={styles.container}>
                <div className='row'>
                    {templateImagesPaths.map((currentTemplate) => {
                        return (
                            <div className='col col-lg-3 col-md-6 col-12 mt-5' key={shortid.generate()}>
                                <div
                                    style={styles.templateWrapper}
                                    onMouseOver={() => setIsMouseOver(currentTemplate.name)}
                                    onMouseOut={() => setIsMouseOver('MouseIsNotOver')}
                                >
                                    <div className='w-100 d-flex justify-content-center'>
                                        <h3>{currentTemplate.name}</h3>
                                    </div>
                                    <img
                                        className="w-100 image-aspect-ratio"
                                        src={currentTemplate.imageSource}
                                        alt='template'
                                    />
                                    {isMouseOver === currentTemplate.name && (
                                        <Link to="/detailsfillingpage/personalinfo">
                                            <button
                                                className='btn btn-primary'
                                                style={styles.templateButton}
                                                onClick={() => {
                                                    dispatch(updateState({
                                                        key: 'selectedTemplate',
                                                        value: currentTemplate.name
                                                    }));
                                                }}
                                            >
                                                Use Template
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
