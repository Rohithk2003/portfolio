
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
    useEffect(() => {
        // Create a new instance of Typed.js once the component mounts
        const options = {
            strings: ['Hello, World!', 'Welcome to Typed.js in Next.js!'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        const typed = new Typed('.typing-element', options);

        // Clean up function to destroy Typed instance when component unmounts
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array to run the effect only once

    return <span className="typing-element"></span>;
};

export default TypingAnimation;