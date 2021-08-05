import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { CardComponent } from './card.component';
import { withNotes } from '@storybook/addon-notes';
storiesOf('Card', module)
  .add('empty', () => ({
    component: CardComponent,
    props: {}
  }))
  .add('with title', () => ({
    component: CardComponent,
    props: {
      title: 'Hello card!'
    }
  }))
  .add('with title and subtitle', () => ({
    component: CardComponent,
    props: {
      title: 'Hello card!',
      subtitle: 'Well hello there 👋'
    }
  }))
  .add(
    'with notes',
    withNotes('Just a few notes about this story...')(() => ({
      component: CardComponent,
      props: {}
    }))
  )
  .add('with action', () => ({
    component: CardComponent,
    props: {
      title: 'A card...',
      subtitle: 'Waiting to be clicked-on',
      btnClicked: action('👊 Button was clicked')
    }
  }));