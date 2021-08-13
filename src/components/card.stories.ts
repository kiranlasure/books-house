import { CommonModule } from "@angular/common";
import { action } from "@storybook/addon-actions";
import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { cardComponent } from "./card.component";


export default{
    component: cardComponent,
    decorators:[
        moduleMetadata({
            declarations: [cardComponent],
            imports: [ CommonModule]
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Card',
}

export const actionData = {
    onTitleChange: action('onTitleChange'),
    onColorChange: action('onColorChange')
}



const Template: Story<cardComponent> = orgs=>({
    props:{
        onTitleChange: actionData.onColorChange,
        onColorChange: actionData.onColorChange,
    },
    
});

export const Default1 = Template.bind({});


Default1.args = {
    card:{
        id:"1",
        Name:"Login",
        state:"Default Color"
    }
}