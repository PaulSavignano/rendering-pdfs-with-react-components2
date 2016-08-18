import React from 'react'
import InLineCss from 'react-inline-css'
import { ListGroupItem, Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'

export const Document = ({ document }) => (
  <InLineCss stylesheet={`
    .Document {
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }
    @media print {
    .Document {
    display: block;
    border: 1px solid red;
    padding: 20px;
    }
    .btn { display: none }
    hr { display: none }
    h3 {
    font-size: 28px;
    margin-top: 0px;
    margin-bottom: 0px;
    }
    p {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 18px;
    }
    }
  `}>
    <ListGroupItem className="Document">
      <Button bsStyle="success" data-id={ document._id } onClick={ downloadPFD }>Download</Button>
      <hr/>
      <h3>{ document.title }</h3>
      <p>{ document.body }</p>
    </ListGroupItem>
  </InLineCss>
)

Document.propTypes = {
  document: React.PropTypes.object.isRequired,
}
