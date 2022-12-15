// 🏆 DREAM TEAM World Cup  ⚽️ ⚽️ ⚽️
const dreamTeam = {
  'porteros': new Array(2).fill('🥅'),
  'defensas': new Array(8)
    .fill('👈', 0, 3) // 3
    .fill('🛟', 3, 5) // 2
    .fill('👉', 5, 8),// 3
  'delanteros': ['🇦🇷 Mesi', '🇵🇹 Ronaldo'],
  'hinchas': new Array(300)
    .fill('👕', 0, 200)
    .fill('👚', 200, 300),
  'vacantes': new Array().fill('✅')
};

console.log(
  '%c ⭐️ Dream Team ⚽️',
  'font-size: 15px; color: yellow');

console.info(dreamTeam);

console.table(dreamTeam.hinchas);

console.log(`G${new Array(500).fill('⚽️').join('')}LLLLL`);

