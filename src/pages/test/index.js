import { makeAutoObservable } from "mobx"

class TestStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state = {
        show: true,
        playerLVL: 7,
        items: [
            {
                title: 'Памятка 1',
                access: 1,
                type: 'list',
                data: [
                    { title: 'title 1', ico: 'ico_1', content: [{ title: 'title', description: 'description', text: 'Lorem1, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title1', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' }, { title: 'title', description: 'description', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore hic ad aspernatur nesciunt itaque excepturi, nam sapiente minima ullam repellat consectetur obcaecati quod. Fugiat distinctio ipsam inventore similique quibusdam!' },] },
                    { title: 'title 2', ico: 'ico_2', content: [{ title: 'title', description: 'description', text: 'lorem' }] },
                    { title: 'title 3', ico: 'ico_3', content: [{ title: 'title', description: 'description', text: 'lorem' }] },
                    { title: 'title 4', ico: 'ico_4', content: [{ title: 'title', description: 'description', text: 'lorem' }] },
                    { title: 'title 4', ico: 'ico_5', content: [{ title: 'title', description: 'description', text: 'lorem' }] },
                    { title: 'title 4', ico: 'ico_6', content: [{ title: 'title', description: 'description', text: 'lorem' }] },
                    { title: 'title 4', ico: 'ico_7', content: [{ title: 'title', description: 'description', text: 'lorem' }] },
                    { title: 'title 4', ico: 'ico_8', content: [{ title: 'title', description: 'description', text: 'lorem' }] },
                ]
            },
            {
                title: 'Памятка 2',
                access: 2,
                type: 'list',
                data: [
                    { title: 'title', content: [{ title: 'title', description: 'description', text: 'lorem' }] }
                ]
            },
            {
                title: 'Памятка 3',
                access: 3,
                type: 'list',
                data: [
                    { title: 'title', content: [{ title: 'title', description: 'description', text: 'lorem' }] }
                ]
            },
            {
                title: 'Памятка 4',
                access: 4,
                type: 'list',
                data: [
                    { title: 'title', content: [{ title: 'title', description: 'description', text: 'lorem' }] }
                ]
            },
            {
                title: 'Памятка 5',
                access: 5,
                type: 'list',
                data: [
                    { title: 'title', content: [{ title: 'title', description: 'description', text: 'lorem' }] }
                ]
            },
            {
                title: 'Памятка 6',
                access: 6,
                type: 'btns',
                data: [
                    {bg:'one', text:'Какой-то текст 1', btns:[{name:'Btn 1'},{name:'Btn 2', confir: true},{name:'Btn 3'},{name:'Btn 4', confir: true}]},
                    {bg:'two', text:'Какой-то текст 2', btns:[{name:'Btn 1'},{name:'Btn 2', confir: true},{name:'Btn 3'},{name:'Btn 4', confir: true}]},
                    {bg:'three', text:'Какой-то текст 3', btns:[{name:'Btn 1'},{name:'Btn 2', confir: true},{name:'Btn 3'},{name:'Btn 4', confir: true}]},
                    {bg:'four', text:'Какой-то текст 4', btns:[{name:'Btn 1'},{name:'Btn 2', confir: true},{name:'Btn 3'},{name:'Btn 4', confir: true}]}
                ]
            }
        ]

    }
    eventHandler = (event, data) =>{
        console.log(event, 'block id:', data[0], 'btn id:', data[1])
    }
}
export default new TestStore()