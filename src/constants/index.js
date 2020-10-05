export const Widgets = {
  SQUARE: '<h3>Square Widget</h3>',
  SQUARE1: '<h3>Square Widget (x2)</h3>',
  SQUARE2: '<h3>Square Widget (x3)</h3>',
  TEXT: '<h3>Text Widget</h3>',
  IMAGE: '<h3>Image Widget</h3>',
  BUTTON: '<h3>Text Button Widget</h3>'
}

export const Types = {
  SQUARE: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        model: 'backgroundColor',
        label: 'Background Color'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'backgroundImage',
        label: 'Background Image'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'title',
        label: 'Title'
      }
    ]
  },
  SQUARE1: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        model: 'backgroundColor',
        label: 'Background Color'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'backgroundImage',
        label: 'Background Image'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'title',
        label: 'Title'
      }
    ]
  },
  SQUARE2: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        model: 'backgroundColor',
        label: 'Background Color'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'backgroundImage',
        label: 'Background Image'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'title',
        label: 'Title'
      }
    ]
  },
  TEXT: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        model: 'title',
        label: 'Title'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'subTitle',
        label: 'Sub Title'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'description',
        label: 'Description'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'align',
        label: 'Align',
        values: [
          'center',
          'left',
          'right'
        ]
      }
    ]
  },
  IMAGE: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        model: 'maxHeight',
        label: 'Max Height',
        required: true
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'source',
        label: 'Source',
        required: true
      }
    ]
  },
  BUTTON: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        model: 'padding',
        label: 'Padding'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'margin',
        label: 'Margin'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'backgroundColor',
        label: 'Background Color'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'textColor',
        label: 'Text Color'
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'title',
        label: 'Title',
        required: true
      },
      {
        type: 'input',
        inputType: 'text',
        model: 'link',
        label: 'Link'
      }
    ]
  }
}

export const Fields = {
  'button-row': [
      {
      label: 'Button 1 Label',
      name: 'button1Label',
      type: 'text-input',
      default: 'Label 1'
      },
      {
      label: 'Button 2 Label',
      name: 'button2Label',
      type: 'text-input',
      default: 'Label 2'
      },
      {
      label: 'Button 3 Label',
      name: 'button3Label',
      type: 'text-input',
      default: 'Label 3'
      }
  ],
  'image-row': [
    {
      label: 'Image 1',
      name: 'image1',
      type: 'text-input',
      default: 'https://via.placeholder.com/300'
    },
    {
      label: 'Image 2',
      name: 'image2',
      type: 'text-input',
      default: 'https://via.placeholder.com/300'
    }
  ], 
  'text-button' : {
    label: 'Label',
    name: 'label',
    type: 'text-input',
    default: 'Button Label'
  }
  }