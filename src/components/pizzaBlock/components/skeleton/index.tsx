import ContentLoader from 'react-content-loader';

const MyLoader: React.FC = props => (
	<ContentLoader speed={2} width={280} height={460} viewBox='0 0 280 460' backgroundColor='#f3f3f3' foregroundColor='#ecebeb' {...props}>
		<circle cx='123' cy='124' r='119' />
		<rect x='0' y='261' rx='0' ry='0' width='280' height='26' />
		<rect x='-2' y='305' rx='3' ry='3' width='280' height='84' />
		<rect x='137' y='408' rx='15' ry='15' width='140' height='43' />
		<rect x='0' y='408' rx='0' ry='0' width='96' height='31' />
	</ContentLoader>
);

export default MyLoader;
