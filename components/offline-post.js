import dynamic from 'next/dynamic';
import OnlineContent from './online-content';

const OfflinePost = dynamic({
  ssr: false,
  modules: (props) => ({
    Offline: import('../components/offline'),
    Online: import('../components/online')
  }),
  render: (props, { Offline, Online }) => (
    <div>
      <Offline>{props.children}</Offline>
      <Online><OnlineContent /></Online>
    </div>
  )
});

export default OfflinePost;
