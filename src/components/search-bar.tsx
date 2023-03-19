import { Component } from 'react';

interface ValueState {
  value: string;
}
class SearchBar extends Component<never, ValueState> {
  constructor(props: never) {
    super(props);
    this.state = { value: '' };
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
      <form className="max-w-5xl mx-auto my-5 px-3" onSubmit={this.handleSubmit}>
        <label>
          <input
            className="border mx-5 outline-none"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input
          type="submit"
          value="Search"
          className="rounded border hover:bg-slate-700 hover:text-slate-100"
        />
      </form>
    );
  }
}
export default SearchBar;
