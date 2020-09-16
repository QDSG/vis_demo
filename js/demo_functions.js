var nodeIds = [2, 3, 4, 5,6,7,8];
var shadowState = false;

//添加节点
function addNode() {
    // var newId = (Math.random() * 1e7).toString(32);
    // nodes.add({id:newId, label:"I'm new!"});
    var nodesId=nodes.getIds();
    console.log(nodesId)
    var nodesIdLast=parseInt(nodesId[nodesId.length-1]);
    var newId=nodesIdLast+1;
    nodes.add({id:newId, label:"node "+newId})
    edges.add({from: nodesIdLast, to: newId})
    nodeIds.push(newId);
}

//改变节点一的颜色
function changeNode1() {
    var newColor = '#' + Math.floor((Math.random() * 255 * 255 * 255)).toString(16);
    nodes.update([{id:1, color:{background:newColor}}]);
}

//删除随机节点
function removeRandomNode() {
    var randomNodeId = nodeIds[Math.floor(Math.random() * nodeIds.length)];
    nodes.remove({id:randomNodeId});

    var index = nodeIds.indexOf(randomNodeId);
    nodeIds.splice(index,1);
}

function changeOptions() {
    shadowState = !shadowState;
    network.setOptions({nodes:{shadow:shadowState},edges:{shadow:shadowState}});
}