# FirewallSimulation

This is a simple firewall simulation I created for an assignment of Computer Security module in my degree programe.

## Interface and the firewall code segment 

<image src = 'images/Capture.png' height = '300'> -Image 1-
<image src = 'images/Capture1.png' height = '300'> -Image 2-
<image src = 'images/accepted.png' height = '300'> -Image 3-    
<image src = 'images/rejected.png' height = '300'> -Image 4-

In this ‘Image 1’ it shows the interface that will allow the user to enter the IP header and the TCP header fields. Eventhough there are other header fields in both IP and TCP headers here I only considered the source ip address, destination ip address and source port address, destination port address of ip header and the tcp header respectively. Here the user have to enter the binary version of the bothe ip addresses and the port addresses. Now let’s input some test data to test the functionality of the firewall.

In the ‘Image 2’ we have entered some test data. Please note that as I mentioned in the configuration file (chapter 2), this firewall will only accept connection from the source IP addresses from 192.192.192.0 to 192.192.192.10 where subnet mask is 24 to destination IP addresses from 182.182.182.0 to 182.182.182.10 where the subnet mask is 24. Also the source port address should be 49155 and the destination port address should be 49156.

After that we can send these values to check wheter there are accepted or not. If accepted ‘CONNECTION ACCEPTED’ is shown on the interface (‘Image 3’) if not ‘CONNECTION REJECTED’ is shown on the interface (‘Image 4’).

