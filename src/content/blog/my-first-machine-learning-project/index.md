---
title: "My First Machine Learning Project"
description: "A beginner's journey into machine learning and computer vision. Learning about image classification, data preparation, and the challenges of training your first AI model from scratch."
date: "2019-04-12"
author: "Ehsan Pourhadi"
category: ["Machine Learning", "AI"]
tag: ["AI", "ML", "Python", "Computer Vision", "TensorFlow", "Learning"]
featured: false
draft: true
cover: "./ml-cover.jpg"
---

# My First Machine Learning Project

I have been reading a lot about AI and machine learning lately. Big companies like Google, Facebook, and Microsoft are already offering ML and AI-related services. I've played around with Google Vision and seen services from Microsoft, but it was hard to start making your own service.

## Background

I'm a self-taught developer working as a "Full stack" developer at an advertising agency [Guts & Glory](http://gutsglory.se/) in Sweden. I often build WordPress sites from designs and create quizzes and competitions. So I'm not a heavy programmer or data scientist, but I love GitHub because you can find a lot of projects with really good READMEs and installation instructions.

Usually, I don't need to understand what every script does line by line - I can clone it, test it, and see if I get the result I want.

## The Learning Challenge

Many people talk about AI taking over jobs, so I got curious about how these systems actually work. I wanted to build something practical to understand the fundamentals of machine learning.

## Finding a Project

The inspiration came from watching Silicon Valley (the TV series), where they had an AI that could detect if an image contains a hotdog or not. I thought: "Why not build something similar as a learning exercise?"

A quick search on GitHub led me to these resources:

- [Hotdog Classification project](https://github.com/hayzamjs/Hotdog-Classification)
- [Using TensorFlow to classify hotdogs tutorial](https://aboveintelligent.com/using-tensorflow-to-classify-hotdogs-8494fb85d875)

## The Technical Setup Nightmare

Oh... I really didn't know Python well enough! I needed to install:

- Python (correct version)
- TensorFlow
- OpenCV

To be honest, it took me about 2 hours just to be able to run the basic script. I had many problems with Python versions and dependency conflicts. But finally, after many "models missing" errors, I got it to run!

## Data Collection Challenges

### The Image Problem

I started collecting training data using Google image search and the Fatkun Batch Chrome extension (as suggested in tutorials) to download images in bulk.

But then I realized a major issue: **I wanted to classify specific objects, not entire images!** Many images had multiple elements, backgrounds, and distractions.

### Face Detection and Cropping

This led me to another learning challenge - I needed to crop and isolate the subjects in my images. I found this helpful project:

- [Face cropping tool](https://github.com/icchi-h/face-cropping)

The README was in another language, but I could see how to run it! After some trial and error with OpenCV and Python versions, it worked like a charm.

However, some images didn't crop properly, so I had to manually clean the dataset by removing corrupted or incorrectly processed images.

## My Learning Process

Here were the steps I took:

1. **Search and collect** training images using Google Images
2. **Download in bulk** using the Fatkun browser extension (about 100 images per category)
3. **Crop and prepare** the images using OpenCV-based tools
4. **Clean the dataset** by removing corrupted or mislabeled images
5. **Train the model** using the existing TensorFlow scripts
6. **Test and iterate** with new data

## The Results and Learning

### What Worked Well:

- The basic classification framework was solid
- Image preprocessing tools were effective
- The iterative approach of test-and-improve was valuable

### Challenges I Encountered:

- **Data quality matters more than quantity** - having clean, well-labeled data is crucial
- **Bias in training data** affects results significantly
- **Model evaluation** requires diverse test sets
- **Technical setup** can be as challenging as the actual ML work

### Key Insights:

1. **Garbage in, garbage out** - data quality is everything
2. **Start simple** - basic binary classification before complex models
3. **Understand your data** - spend time examining your training set
4. **Test thoroughly** - use data the model has never seen before

## Technical Lessons Learned

### Python Environment Management

- Use virtual environments for different projects
- Keep track of package versions
- Document your setup process

### Data Preparation

- Consistent image sizing and format
- Balanced datasets (equal examples per category)
- Representative test data
- Manual data cleaning is often necessary

### Model Training

- Start with pre-trained models when possible
- Monitor for overfitting
- Save model checkpoints during training
- Document your experiments

## What's Next?

This project taught me that machine learning is as much about **data engineering** as it is about algorithms. The actual model training was just one part of a much larger process.

### Future Learning Goals:

- Explore more sophisticated architectures
- Learn about transfer learning
- Understand evaluation metrics better
- Work on more diverse problem types

### Advice for Beginners:

1. **Start with existing code** - don't build from scratch initially
2. **Focus on understanding the pipeline** - data → model → results
3. **Expect technical difficulties** - environment setup is often the hardest part
4. **Document everything** - you'll forget what you did
5. **Join communities** - the ML community is very helpful

## Reflection

This was my first real dive into machine learning, and it taught me that AI isn't magic - it's sophisticated pattern matching that requires:

- **Quality data**
- **Proper preprocessing**
- **Thoughtful evaluation**
- **Lots of iteration**

The most important takeaway? **You can learn this stuff!** It's 2019 and there are tons of people sharing code and tutorials. Just copy the code, test it, change some lines, and see what happens!

If a self-taught developer like me can figure this out, so can you. You just need patience and persistence.

---

_This was my first technical article ever! Thanks to the open-source community for making learning possible. If you're starting your ML journey, feel free to reach out - we're all learning together!_

**Special thanks to:**

- The creators of the hotdog classification tutorial
- The face-cropping tool developers
- The entire Python/ML open-source community
