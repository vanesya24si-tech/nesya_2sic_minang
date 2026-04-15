const InputPesan = ({ label, type = "text", name, value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '15px', textAlign: 'left' }}>
      <label style={{ fontWeight: 'bold' }}>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ 
          width: '100%', 
          padding: '10px', 
          marginTop: '5px',
          borderRadius: '4px',
          border: error ? '2px solid red' : '1px solid #ccc' 
        }}
      />
      {/* Alert Error di bawah inputan */}
      {error && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0' }}>⚠️ {error}</p>}
    </div>
  );
};

export default InputPesan;