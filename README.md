# HW1

### Files included in the repository
##### main1.js
This is the node.js file which has the 'createDroplet' function to create the digital ocean droplet. 
The ID of the created droplet is passed to the 'listDropletIp' function which retrieves the ip address of that droplet. It then creates an inventory file and adds the following lines to it. 
```
[webservers]
node0 ansible_ssh_host='ip address' ansible_ssh_user=root ansible_ssh_private_key_file=''
```

##### main2.js
This is the node.js file which setups the necessary configuration for creating the Amazon EC2 instance. 
The ec2.runInstances function creates the instance using the parameters passed to it. 

It then calls the ec2.WaitFor function with instance id as a parameter which waits for the instance to enter into the 
'runnning state' and then retrieves the ip address of that instance. 

It then appends that ip address to the inventory file which was created earlier. 
```
node1 ansible_ssh_host='ip address' ansible_ssh_user=root ansible_ssh_private_key_file=''
```

##### playbook.yml
This file contains the play with tasks for installing and starting nginx on the group of hosts specified in the 
inventory file. 
```
[webservers]
```

##### script
This is a bash script file which contains the commands to run the above two node.js files and to run the ansible 
playbook. The sleep function is used to allow time to the hosts to get initialized. 

##### package.json
This file has all the dependencies specified in it. 

### Configuration management
Run the following two commands in the project folder. It will add the dependencies in the folder and also add them 
in the package.json file. 
```
npm install fs --save

npm install aws-sdk --save

npm install needle --save
```
### Screencast for HW1

![video](https://cloud.githubusercontent.com/assets/11006675/9923506/bdec9bda-5cc3-11e5-9332-d6f181783670.gif)
