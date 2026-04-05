import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground/98 border-t border-white/10 p-4 backdrop-blur-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70">
          Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de confidentialité.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={refuse}
            className="text-sm px-4 py-2 rounded-lg border border-white/20 text-white/70 hover:bg-white/10 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
