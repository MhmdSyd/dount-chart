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
    series: {
    type: 'sunburst',
    // emphasis: {
    //     focus: 'ancestor'
    // },
    data: data,
    radius: [50, '90%'],
    label: {
        rotate: 'radial'
    }
    }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);