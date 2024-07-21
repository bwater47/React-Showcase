import Marquee from 'react-fast-marquee';

export default function Skills() {
  return (
    <Marquee
      style={{}} // Inline styles for the container div
      className="" // CSS class for additional styling
      autoFill={false} // Whether to automatically fill blank space
      play={true} // Whether to play or pause the marquee
      pauseOnHover={false} // Pause on hover
      pauseOnClick={false} // Pause on click
      direction="left" // Direction of the marquee
      speed={50} // Speed of the marquee in pixels/second
      delay={0} // Delay after render, in seconds
      loop={0} // Number of loops, 0 for infinite
      gradient={false} // Show gradient effect
      gradientColor="white" // Color of the gradient
      gradientWidth={200} // Width of the gradient
      onFinish={() => console.log('Marquee finished scrolling')} // Callback when marquee finishes scrolling
      onCycleComplete={() => console.log('Marquee loop completed')} // Callback when a loop finishes
      onMount={() => console.log('Marquee mounted')} // Callback when marquee is mounted
    >
      <div>Your scrolling content goes here.</div>
    </Marquee>
  );
}
