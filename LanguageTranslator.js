import React, { useEffect } from 'react';

function LanguageTranslator() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };
    
    return () => {
      // Cleanup to remove the script when the component unmounts
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div>
      <h1>My Web Page</h1>
      <p>Hello everybody!</p>
      <p>Translate this page:</p>
      <div id="google_translate_element"></div>
      <p>You can translate the content of this page by selecting a language in the select box.</p>
    </div>
  );
}

export default LanguageTranslator;
