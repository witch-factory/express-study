const fortunes=[
  "Conquer your fears or they will conquer you.",
  "River needs springs.",
  "Do not fear what you don't know.",
  "You'll have a pleasant surprise."
]

const getFortune=()=>{
  const idx=Math.floor(Math.random()*fortunes.length);
  return fortunes[idx];
}

export {getFortune}