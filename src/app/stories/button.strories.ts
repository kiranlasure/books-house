import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import ButtonComponent from 'src/stories/button.component';
storiesOf('Button', module)
  .add('empty', () => ({
    component: ButtonComponent,
    props: {}
  }))
  .add('Big', () => ({
    component: ButtonComponent,
    props: {
      title: 'Hello card!'
    }
  }))
  .add('with action', () => ({
    component: ButtonComponent,
    props: {
      title: 'A card...',
      subtitle: 'Waiting to be clicked-on',
      btnClicked: action('👊 Button was clicked')
    }
  }));