export default function UserLabel({ label }: { label: string }) {
  return (
    <div
      style={{
        fontSize: '0.9rem',
        textAlign: 'left',
        width: '73%',
        marginBottom: '0.6rem',
        marginTop: '0.3rem',
      }}
    >
      {label}
    </div>
  );
}
