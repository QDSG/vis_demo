var demoEdges=[
    {from: 1, to: 8, color:{color:'red'}},
    {from: 1, to: 3, color:'rgb(20,24,200)'},
    {from: 1, to: 2, color:{color:'rgba(30,30,30,0.2)', highlight:'blue'}},
    {from: 2, to: 4, color:{inherit:'to'}},
    {from: 2, to: 5, color:{inherit:'from'}},
    {from: 5, to: 6, color:{inherit:'both'}},
    {from: 6, to: 7, color:{color:'#ff0000', opacity:0.3}},
    {from: 6, to: 8, color:{opacity:0.3}},
];
var demoEdgesviews=[
    { from: 1, to: 2, relation: 'friend', arrows: 'to, from', color: { color: 'red'}, title: '3 emails per week' , label: 'middle',     font: {align: 'middle'}},
    { from: 1, to: 3, relation: 'friend', arrows: 'to, from', color: { color: 'red'}, title: '3 emails per week' , label: 'top',        font: {align: 'top'}},
    { from: 2, to: 3, relation: 'friend', arrows: 'to, from', color: { color: 'red'}, title: '3 emails per week' , label: 'horizontal', font: {align: 'horizontal'}},
    { from: 5, to: 2, relation: 'parent', arrows: 'to', color: { color: 'green'}, title: '3 emails per week' , label: 'middle',     font: {align: 'middle'}},
    { from: 4, to: 1, relation: 'teacher', arrows: 'to', color: { color: 'blue'}, title: '3 emails per week' , label: 'top',        font: {align: 'top'}},
    { from: 4, to: 2, relation: 'teacher', arrows: 'to', color: { color: 'blue'}, title: '3 emails per week' , label: 'horizontal', font: {align: 'horizontal'}},
    { from: 4, to: 3, relation: 'teacher', arrows: 'to', color: { color: 'blue'}, title: '3 emails per week' , label: 'bottom',     font: {align: 'bottom'}},
];
const demoEdgesFilter = (edge) => {
    return edgesFilterValues[edge.relation]
}