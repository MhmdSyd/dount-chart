var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var data = [
    {
    name: 'مشروع',
    children: [
        {
        name: 'نثر بذور',
        value: 10,
        children: [
            {
            name: 'مبادرات المركز',
            value: 5
            },
            {
            name: 'مكاسب سريعة',
            value: 5,
            }
        ]
        },
        {
        name: 'تقليم أشجار',
        value: 10,
        children: [
            {
            name: 'ميزانية عامة',
            value: 10
            },
            
        ]
        },
        {
            name: "تسييج",
            value: 10,
            children: [
                {
                name: "شركات",
                value: 5
                },
                {
                    name: "شركات",
                    value: 5
                },
                
            ]
        }
    ]
    },
    {
    name: 'حملة',
    children: [
        {
        name: 'تقليم اشجار',
        children: [
            {
            name: 'individual',
            value: 2
            },
            {
            name: 'Non-profit',
            value: 4
            }
        ]
        },
        {
            name: "نثر بذور",
            children: [
                {
                name: 'Private',
                value: 3
                },
                {
                name: 'Non-profit',
                value: 1
                }
            ]
        },
        {
            name: "تأهيل",
            children: [
                {
                name: 'Public',
                value: 1
                },
                {
                name: 'Non-profit',
                value: 4
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
    radius: [0, '90%'],
    label: {
        rotate: 'radial'
    }
    }
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);