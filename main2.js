var AWS = require('aws-sdk');
var fs = require('fs');


AWS.config.update({accessKeyId: process.env.AccessKeyID, 
  secretAccessKey: process.env.SecretAccessKey});


AWS.config.update({region: 'us-west-1'});

var ec2 = new AWS.EC2();

var params = {
 
  ImageId: 'ami-cf6a8b8b',
  InstanceType: 't1.micro',
 
  MinCount: 1, MaxCount: 1,
  KeyName: 'GGN', 

};


ec2.runInstances(params, function(err, data) {
  if (err) { console.log("Could not create instance", err); return; }

  var instanceId = data.Instances[0].InstanceId;
  console.log("Created ec2 instance with instanceId: ", instanceId);

ec2.waitFor('instanceRunning', {InstanceIds: [instanceId]}, function(err, data) {
  if (err) return console.error(err)

var publicIp = data.Reservations[0].Instances[0].PublicIpAddress;
  console.log("Public Ip Address of ec2 instance is: " , data.Reservations[0].Instances[0].PublicIpAddress)

                 
                 var buf = new Buffer('node1 ansible_ssh_host='+publicIp+' ansible_ssh_user=ubuntu ansible_ssh_private_key_file=/Users/gaurigurunathnaik/Desktop/HW1/GGN.pem\n');
                 fs.appendFileSync('/Users/gaurigurunathnaik/Desktop/HW1/inventory', buf);
                
    
});

});
    