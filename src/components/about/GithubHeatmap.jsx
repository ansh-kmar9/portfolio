// components/GithubHeatmap.jsx
import GitHubCalendar from 'react-github-calendar';

const GithubHeatmap = ({ username }) => {
  return (
    <div className="overflow-auto">
      <GitHubCalendar
        username={username}
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        fontSize={14}
      />
    </div>
  );
};

export default GithubHeatmap;
