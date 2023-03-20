var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

var data = [
    {
    name: 'مشاريع',
    children: [
        {
        name: "مبادرات المركز",
        value: 10,
        children: [
            {
            name: "نثر بذور",
            value: 5
            },
            {
            name: "زراعة اشجار",
            value: 5,
            }
        ]
        },
        {
        name: "مكاسب سريعة",
        value: 10,
        children: [
            {
            name: "تقليم أشجار",
            value: 10
            },
            
        ]
        },
        {
        name: "شراكات",
        value: 10,
        children: [
            {
            name: "تسييج",
            value: 5
            },
            {
            name: "زراعة شتلات",
            value: 5
            },
            
        ]
        },
        {
            name: "ميزانية عامة",
            value: 10,
            children: [
                {
                name: "نظافة",
                value: 5
                },
                {
                    name: "تأهيل",
                    value: 5
                },
                
            ]
        }
    ]
    },
    {
    name: 'حملات تطوعية',
    children: [
        {
        name: "Individual",
        value:10,
        children: [
            {
            name: 'تسييج',
            value: 5
            },
            {
            name: 'دراسة',
            value: 5
            }
        ]
        },
        {
            name: "Private",
            value:10,
            children: [
                {
                name: 'زراعة أشجار',
                value: 5
                },
                {
                name: 'تأهيل',
                value: 5
                }
            ]
        },
        {
            name: "Public",
            value:10,
            children: [
                {
                name: 'تقليم أشجار',
                value: 5
                },
                {
                name: 'جمع بذور',
                value: 5
                }
            ]
        },
        {
            name: "Non-Profit",
            value:10,
            children: [
                {
                name: 'نثر بذور',
                value: 5
                },
                {
                name: 'زراعة شتلات',
                value: 5
                }
            ]
        }
    ]
    }
];

option = {
    title: {
        text: "Tree",
        left: 'center',
        top: 'center',
    },
//     color: [
//         '#c23531',
//         '#2f4554',
//         '#61a0a8',
//         '#d48265',
//         '#91c7ae',
//         '#749f83',
//         '#ca8622',
//         '#bda29a',
//         '#6e7074',
//         '#546570',
//         '#c4ccd3'
// ],
    series: {
        type: 'sunburst',
        // emphasis: {
        //     focus: 'ancestor'
        // },
        data: data,
        radius: [50, '90%'],
        label: {
            rotate: 'radial',
            // position: 'center',
            // formatter: () => {return "tree";}
        }
    }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);