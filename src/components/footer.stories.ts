import { CommonModule } from "@angular/common";
import { action } from "@storybook/addon-actions";
import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { cardComponent } from "./card.component";
import { footerComponent } from "./footer.component";


export default{
    component: footerComponent,
    decorators:[
        moduleMetadata({
            declarations: [footerComponent],
            imports: [ CommonModule]
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'footer',
}




const Template: Story<footerComponent> = orgs=>({
    props:{}
    
});

export const Default = Template.bind({});


Default.args = {
    card:{
        id:"1",
        Name:"Login",
        state:"Default Color"
    }
}