Question 1: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

    Records: In search engines like Algolia, a "record" is a single item of data that you want to make searchable - in other words records is your data. 
	For example, in an address book, a record is the data inside that addressbook. 
	Each record can contain multiple fields, like a person's name, address, phone number etc
	
    Indexing: Your records has to be saved somewhere for you to use it. Indexing is therefore the term we use for storing your data so that
	the serach engine and data retrieval is optimized, ie we create a map of your data (indexing) which in turn speeds up the searching process. 

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."
Our search engine is built in an agnostic way such that the search and retrieval process can be optimized or ranked for your business
such that your customers can quickly find what they're looking for. 

For example, if you provide food delivery service in your webapp and a customer searches for a certain cuisine, you will build a 
"custom ranking" that will rank the search results based on location (how far the restaurant is from the customer) and rating. 

You can leverage as well Algolia AI to dyanmically adapt those rankings to your customer base. This way you'll ensure the best
search experience for your customers. 

Cheers, George

Hello George, 


plesae find my answers above to your questions. 

Ill be happy to go on a quick call with you to explain those concepts further. 

Best, Adel


Question 2: Hello,
-------------------------------------------------------------------------------------------------------------------------

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Hello, 


I understand that it can be cumbersome and we already thought of ways to automate the process and make things simpler. 

We worked on provding command line interface (CLI), Algolia CLI, which lets you manage indices (create, manage, delete) from your command line 

you can find the documentation [here](https://www.algolia.com/doc/tools/cli/get-started/overview/)	

Have a look at the documentation and let us know if you have any questions.  

Thank you! 
Best, Adel


Regards, Matt



Question 3: Hi,
-------------------------------------------------------------------------------------------------------------------------
I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

(assuming that they're using React for their website)

Hi Leo, 


hope you're doing well. 

We've worked hard on provding ready-made libraries so that the integration of Algolia into any website is made easy. 

Integrations are now easy with our InstantSearch.js library (https://github.com/algolia/instantsearch).

There are few steps that need to be taken to setup your search data.afterwards you'll then integrate our InstantSearch library into your website and start using 
Algolia for your search results. 

The setup process is as follows: 
1- create an account at Algolia, if you don't have one already. Follow the steps here (<ADD_LINK>)
2- create an Index in your dashboard and then upload your data there

Once the setup is ready you can then start integrating Reacht Instantsearch into your project by following our guide [here](https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/). 

Additionally, you can take a look at our Reach Instantsearch LIVE Demo [here](https://codesandbox.io/p/sandbox/github/algolia/instantsearch/tree/master/examples/react/default-theme) and start tinkering around to see how the integration works. 

Please let us know if you have any more questions. 

Best, Adel
