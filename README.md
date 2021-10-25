# fullstack-20211014-Towfiqomi

The project fetches cloud list from Aiven public API and a list of cloud is shown as in table in app. User can also filter the cloud list using cloud providers, regions and the distance.

![Cloud-App](https://user-images.githubusercontent.com/24907984/138779150-c88b896f-f61e-42a1-863c-0c70c1d5d605.png)

### Used Tech Stack

- Python
- Fast API (API Web framework)
- Poetry (Dependency Management)
- React
- Typescript

### Run The Project

The project can be run with or without the Docker. No need to create any virtual environment as Poetry will isolate the dependencies and create a venv by itself. Docker images can be built and run using the Makefile commands.

#### With Docker
Use the follwing command in root folder where the `Makefile` is,
```bash
make up
```

To stop the container use the command,
```bash
make down
```

#### Without the Docker

To run the API first install Poetry,

```bash
pip install --upgrade pip 'poetry==1.1.5'
```

Required dependencies are added in `pyproject.toml` in `cloud-api`. To install the dependencies, Run the following command,
```bash
poetry install --no-root
```
Now to run the application,
```bash
poetry run uvicorn apis.main:app --host 0.0.0.0 --port 5000 --reload
```

Now to run the client application go to the `cloud-app` folder, and use the following command,
```bash
yarn install
```
And then,
```bash
yarn start
```

### The URLS

- [API Docs](http://localhost:5000/docs)
- [API Redoc](http://localhost:5000/redoc)
- [APP](http://localhost:3000/)

### External Service
To collect the user's location data the project used am external service called [Freegeoip](https://freegeoip.app/). This data is collected to compare the user location with the cloud's location to get the distance of the cloud from the each user.

### Attributes

- https://dev.to/dcodeyt/creating-beautiful-html-tables-with-css-428l
- https://www.youtube.com/watch?v=FD50LPJ6bjE
- https://www.antstack.io/blog/reusable-form-components-using-react-formik-yup/
- https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-2887706
- https://dev.to/tylerlwsmith/how-to-implement-a-working-checkbox-component-in-formik-1-5-8-5dmj
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
- https://stackoverflow.com/questions/4148499/how-to-style-a-checkbox-using-css
- https://yogeshnogia.medium.com/program-to-sort-the-given-array-of-objects-having-lat-lng-by-distance-from-your-given-location-9052eb45f86d


