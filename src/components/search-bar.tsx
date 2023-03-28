import { Component } from 'react';

interface ValueState {
  value: string;
}
class SearchBar extends Component<unknown, ValueState> {
  constructor(props: unknown) {
    super(props);
    const item = localStorage.getItem('value');
    item ? (this.state = { value: item }) : (this.state = { value: '' });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event: React.SyntheticEvent) {
    alert('Search ' + this.state.value);
    event.preventDefault();
  }
  componentDidMount() {
    const item = localStorage.getItem('value');
    if (item) this.setState({ value: item });
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
  }

  render() {
    return (
      <div className="mx-auto flex max-w-5xl justify-center">
        <form className="my-5 " onSubmit={this.handleSubmit}>
          <label>
            <input
              className="mx-5 w-72 border-2 px-2 outline-none"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="Search"
            className="w-36 rounded  border-2 font-normal text-orange-700 hover:bg-blue-400 hover:text-slate-100"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
