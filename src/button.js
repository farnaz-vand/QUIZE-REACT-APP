export default function Button() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      {/* 👇️ open link in new tab using a button */}
      <button onClick={() => openInNewTab('https://github.com/FarnazAdib')}>
        github
      </button>
    </div>
  );
}
