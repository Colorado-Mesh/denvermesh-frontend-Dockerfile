import React from 'react';
import cx from 'classnames';
import { Container , Image
} from 'semantic-ui-react';
import bgPNG from './web-logo-square1.png';

const View = (props) => {
    const { data, className, style } = props;
  return (
    <>
      <div className={cx('block', 'block01', className)} style={style}>
      <Container text style={{background: '#333333', border: 'none', borderRadius: '5px', color: 'white'}}>
                    <h3 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97'}}>{data.title}</h3>
                    <Image className='icon floated'src={bgPNG} size='small' floated='right'
                    style={{marginRight: '20px'}} />
                    <span style={{paddingLeft: '10px'}}>Date: <span style={{fontSize: '16px', paddingLeft: '8px'}}>&nbsp;&nbsp;&nbsp;{data.date}</span>  </span>
                    <br/>
                    <span style={{paddingLeft: '10px'}}>Time:
                    <span style={{fontSize: '16px', paddingLeft: '8px'}}>&nbsp;&nbsp;&nbsp;&nbsp;{data.time}</span> 
                    </span>
                    <br/>
                    <span style={{paddingLeft: '10px'}}>Where: <span style={{fontSize: '16px', paddingLeft: '6px'}}>&nbsp;<a href={data.URL}>{data.where}</a> </span>  </span>
                    <br/>
                    <span style={{paddingLeft: '10px'}}>RSVP: <span style={{fontSize: '16px', paddingLeft: '8px'}}> &nbsp;<a href={data.RSVP}>{data.rsvp}</a> </span>  </span>
                    <br/>
                    <br/>
                </Container>
    </div>
    </>
  );
};

export default View;