(function()
{
	if(document.getElementsByName("custom_field_21")[0] == "[object HTMLSelectElement]")
	{
		userinput = window.prompt("Enter your Orders or Matrix exchange name, Don`t write it down it`s CASE SENSITIVE","DON`T WRITE HERE, COPY FROM MATRIX OR ORDERS");
		
		if (userinput != null)
		{
			if(userinput.trim() == "DON`T WRITE HERE, COPY FROM MATRIX OR ORDERS")
			{
				alert("No exchange name entered, please try again");
			}
			else
			{
				input = userinput.trim();
				list = document.getElementsByName("custom_field_21")[0];
				x = list.options.length;
				
				for(i=0;i<x;i++)
				{
					if(list.options[i].value == input)
					{
						list.value = input;
						document.getElementsByName("custom_field_1")[0].value = "";
						break;
					}
				}
				
				if(list.value != input)
				{
					acc = document.getElementsByName("custom_field_37")[0];
					
					if(acc == "[object HTMLInputElement]" && document.getElementsByName("custom_field_37")[0].value == "")
					{
						alert("Please go back and write account number first");
					}
					else
					{
						if(acc == "[object HTMLInputElement]")
							accnum =  " Acc#" + document.getElementsByName("custom_field_37")[0].value;
						else 
							accnum = "";
						
						list.value = "Mohandseen";
						alert("Exchange Not Found, added as a Comment and an E-Mail will open to be sent as per KMP General Info section #14");
						document.getElementsByName("custom_field_1")[0].value = 'Exchange: '+input;
						ebody = "Dear all, " +escape("\n\n")+"Kindly note that the below exchange not found on agento."+escape("\n\n")+"Exchange: "+ input;
						window.location.href = "mailto:sales-ccfollowup@tedata.net?cc=cc-sales@tedata.net;salesgroup@tedata.net&subject=Exchange Not Found"+ accnum + "&body="+ebody;		
					}
				}
			}
		}
		else
		{
			if(userinput != null)
				alert("No ADSL Exchange on this ticket.");
		}
	}
	else
	{
		alert("AgentoExchange can only be used in Agento tickets that contain ADSL Exchange choice");
	}
}
)();