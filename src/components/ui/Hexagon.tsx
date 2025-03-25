
function Hexagon({ children, size = 100 }: { children: React.ReactNode; size?: number }) {
  const height = (Math.sqrt(3) / 2) * size; // Height of a regular hexagon
  return (
    <svg width={size} height={height} viewBox="0 0 100 86.6">
      <defs>
        <clipPath id="hexClip">
          <polygon points="25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3" />
        </clipPath>
      </defs>
      <foreignObject x="0" y="0" width="100" height="86.6" clipPath="url(#hexClip)">
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
      </foreignObject>
    </svg>
  );
}

export default Hexagon;