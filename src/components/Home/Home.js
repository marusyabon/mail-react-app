import React from 'react';
import './Home.less';

class Home extends React.PureComponent {

  render() {
    return (
      <div className="HomeLayout Flex MailArea">
        <div className="Ads">
          <h1>Some ads</h1>
          <div>
            <h3>Lorem Ipsum has been the industry's</h3>
            <p>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
          </div>
          <div>
            <h3>Lorem Ipsum has been the industry's</h3>
            <p>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
          </div>
          <div>
            <h3>Lorem Ipsum has been the industry's</h3>
            <p>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
          </div>
        </div>
        <div className="News">
          <h1>Some news</h1>
          <div>
            <h3>There are many variations of passages</h3>
            <p>variations of passages of Lorem Ipsum available, but the majority</p>
          </div>
          <div>
            <h3>Lorem Ipsum has been the industry's</h3>
            <p>variations of passages of Lorem Ipsum available, but the majority</p>
          </div>
          <div>
            <h3>Finibus Bonorum et Malorum (The Extremes of Good and Evil)</h3>
            <p>variations of passages of Lorem Ipsum available, but the majority</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;