import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/languageToggle.scss';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      type="button"
      aria-label={`Switch to ${language === 'en' ? 'Korean' : 'English'}`}
    >
      <span className="active-lang">{language === 'en' ? 'KR' : 'EN'}</span>
      <span className="inactive-lang">{language === 'en' ? 'EN' : 'KR'}</span>
    </button>
  );
};

export default LanguageToggle;
