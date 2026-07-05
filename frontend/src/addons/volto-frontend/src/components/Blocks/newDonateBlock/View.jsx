import cx from 'classnames';
import React from 'react';
import { Container ,Button, Progress
} from 'semantic-ui-react';

const View = (props) => {
  // - `data` holds the values entered in the block edit form.
  // - `className` holds the CSS class names injected into this block
  //   by Volto's `styleClassNameExtenders`.
  // - `style` holds the CSS properties injected into this block
  //   by Volto's `Block Style Wrapper`.
  const { data, className, style } = props;
  return (
    <div className={cx('block', 'block01', className)} style={style}>
      <Container text style={{background: '#333333', border: 'none', borderRadius: '5px', color: 'white'}}>
                    <br/>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>{data.title}</h4>
                    <Button inverted color='olive' style={{marginLeft: '32%'}} as='a' href={data.url}>Donate</Button>  
                    <br/>
                    <br/>
                    <Progress percent={data.percent} indicating />
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>Thank You!!</h4>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>{data.dateMessage}</h4>
                    <h5 style={{fontWeight: 'bold' , paddingLeft: '5px', textAlign: 'center', marginTop: '0px', marginRight: '5px', color: 'orange'}}>Donations are used for the following:</h5>
                    <ul style={{fontWeight: 'bold' , textAlign: 'left', fontSize: '12px', marginTop: '0px',  color: 'orange'}}>
                        <li>Linode Server costs</li>
                        <li>Mattermost Instance Hosting</li>
                        <li>Email Server Self-Hosted (Free member @coloradomesh.org email addresses available to Regional Ops)</li>
                        <li>Stickers & Other Materials</li>
                        <li>Domain Name Registration</li>
                        <li>A Dedicated MQTT observer server for MeshCore</li>
                        <li>Hosting Custom MeshCore Setup Utilities</li>
                        <li>Custom MeshCore Range Checker - with live reporting</li>
                        <li>ColoradoMesh custom Meshtastic Network Analytics</li>
                        <li>MeshCore custom Network Analytics Service</li>
                        <li>ColoradoMesh custom developed Desktop Application called "Mesh-Client"</li>
                    </ul>
                    <h4 style={{fontWeight: 'bold' , textAlign: 'left', fontSize: '14px', marginTop: '0px',  color: 'orange'}}>We have as a community decided not to pursue registration as a Non-Profit, and instead maintain a Club status. Founding member Andrew Himelstieb is the current club treasurer, so the link goes to a paypal account managed by him.</h4>
       </Container>
    </div>
  );
};

export default View;